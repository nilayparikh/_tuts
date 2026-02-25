<#
.SYNOPSIS
    Sync the vendored @localm/tutorial-framework from common/.

.DESCRIPTION
    Copies the framework source from common/frontend/tutorial-framework/src/
    into this repo's packages/tutorial-framework/src/.

    Use this after updating components in the common repo.

.PARAMETER CommonRoot
    Path to the common/ directory. Defaults to ../../common relative to this
    repo, which works in the localm-tuts multi-repo workspace.

.EXAMPLE
    ./scripts/sync-common.ps1
    ./scripts/sync-common.ps1 -CommonRoot "C:\repos\common"
#>

param(
    [string]$CommonRoot
)

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent $PSScriptRoot

if (-not $CommonRoot) {
    $CommonRoot = Join-Path $ProjectRoot "..\..\common"
}

$SourceDir = Join-Path $CommonRoot "frontend\tutorial-framework\src"
$TargetDir = Join-Path $ProjectRoot "packages\tutorial-framework\src"

# ── Validate ────────────────────────────────────────────────────────────
if (-not (Test-Path $SourceDir)) {
    Write-Host "ERROR: Source not found at $SourceDir" -ForegroundColor Red
    Write-Host "Pass -CommonRoot to point to your common/ directory." -ForegroundColor Yellow
    exit 1
}

if (-not (Test-Path $TargetDir)) {
    Write-Host "ERROR: Target not found at $TargetDir" -ForegroundColor Red
    exit 1
}

# ── Sync ────────────────────────────────────────────────────────────────
Write-Host "`n━━━ Syncing @localm/tutorial-framework ━━━" -ForegroundColor Cyan
Write-Host "From: $SourceDir" -ForegroundColor DarkGray
Write-Host "  To: $TargetDir" -ForegroundColor DarkGray

# Remove old source, copy fresh
Remove-Item -Recurse -Force $TargetDir
Copy-Item -Recurse -Force $SourceDir $TargetDir

# Count files synced
$fileCount = (Get-ChildItem -Recurse -File $TargetDir).Count
Write-Host "`n[OK] Synced $fileCount files" -ForegroundColor Green
Write-Host "Run 'npm run build' to verify." -ForegroundColor DarkGray
