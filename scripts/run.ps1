<#
.SYNOPSIS
    One-command launcher for the LocalM tutorial template.

.DESCRIPTION
    Installs dependencies (if needed), runs type-check, and starts the
    Next.js dev server with Turbopack.

.EXAMPLE
    ./scripts/run.ps1
    ./scripts/run.ps1 -SkipInstall
    ./scripts/run.ps1 -Build
#>

param(
    [switch]$SkipInstall,
    [switch]$Build,
    [switch]$Preview
)

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent $PSScriptRoot

Push-Location $ProjectRoot
try {
    Write-Host "`n━━━ LocalM Tutorial Template ━━━" -ForegroundColor Cyan
    Write-Host "Project: $ProjectRoot" -ForegroundColor DarkGray

    # ── 1. Check Node.js ────────────────────────────────────────────────
    $nodeVersion = & node --version 2>$null
    if (-not $nodeVersion) {
        Write-Host "ERROR: Node.js is not installed. Install Node.js 20+ from https://nodejs.org" -ForegroundColor Red
        exit 1
    }
    Write-Host "[OK] Node.js $nodeVersion" -ForegroundColor Green

    # ── 2. Install dependencies ─────────────────────────────────────────
    if (-not $SkipInstall) {
        if (-not (Test-Path "node_modules")) {
            Write-Host "`n[1/4] Installing root dependencies..." -ForegroundColor Yellow
            npm install
            if ($LASTEXITCODE -ne 0) { throw "npm install failed" }
        } else {
            Write-Host "[OK] node_modules/ exists (use -SkipInstall to skip check)" -ForegroundColor Green
        }
    } else {
        Write-Host "[SKIP] Dependency install" -ForegroundColor DarkGray
    }

    # ── 3. Build the framework package ─────────────────────────────────
    # In dev mode, Next.js transpiles the framework from source via
    # transpilePackages + Turbopack alias, so no pre-build is needed.
    # Only build the framework for production (--Build / --Preview).
    $fwPath = Join-Path $ProjectRoot "_common/frontend/tutorial-framework"
    if (($Build -or $Preview) -and (Test-Path $fwPath)) {
        Write-Host "`n[2/4] Building @localm/tutorial-framework..." -ForegroundColor Yellow
        Push-Location $fwPath
        try {
            if (-not (Test-Path "node_modules")) { npm install }
            npm run build
            if ($LASTEXITCODE -ne 0) { throw "Framework build failed" }
            Write-Host "[OK] Framework built" -ForegroundColor Green
        } finally {
            Pop-Location
        }
    } elseif (-not (Test-Path $fwPath)) {
        Write-Host "[WARN] Framework path not found: $fwPath" -ForegroundColor DarkYellow
    } else {
        Write-Host "[SKIP] Framework build (dev mode uses source directly)" -ForegroundColor DarkGray
    }

    # ── 4. Type check ──────────────────────────────────────────────────
    if ($Build) {
        Write-Host "`n[3/4] Type-checking..." -ForegroundColor Yellow
        npx tsc --noEmit 2>&1 | Out-Null
        if ($LASTEXITCODE -ne 0) {
            Write-Host "WARNING: TypeScript errors found. Run 'npm run type-check' for details." -ForegroundColor DarkYellow
        } else {
            Write-Host "[OK] TypeScript clean" -ForegroundColor Green
        }
    } else {
        Write-Host "[SKIP] Type-check (deferred to dev server)" -ForegroundColor DarkGray
    }

    # ── 5. Build or Dev ────────────────────────────────────────────────
    if ($Build) {
        Write-Host "`n[4/4] Building static site..." -ForegroundColor Yellow
        npm run build
        if ($LASTEXITCODE -ne 0) { throw "Build failed" }
        Write-Host "`n[OK] Static site built → out/" -ForegroundColor Green

        if ($Preview) {
            Write-Host "`nStarting preview server..." -ForegroundColor Yellow
            npx serve out -l 3000
        }
    } elseif ($Preview) {
        if (-not (Test-Path "out")) {
            Write-Host "No out/ directory. Building first..." -ForegroundColor Yellow
            npm run build
            if ($LASTEXITCODE -ne 0) { throw "Build failed" }
        }
        Write-Host "`nStarting preview server..." -ForegroundColor Yellow
        npx serve out -l 3000
    } else {
        Write-Host "`n[4/4] Starting dev server (Turbopack)..." -ForegroundColor Yellow
        Write-Host "       → http://localhost:3000" -ForegroundColor Cyan
        Write-Host "       Press Ctrl+C to stop.`n" -ForegroundColor DarkGray
        npm run dev
    }
} finally {
    Pop-Location
}
