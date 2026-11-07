Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

nodePath = "C:\Program Files\nodejs\node.exe"
appDir = "C:\Users\Awan\.gemini\antigravity\scratch\maa-creative"
serveScript = appDir & "\node_modules\serve\build\main.js"
outDir = appDir & "\out"

If fso.FileExists(nodePath) Then
    cmd = """" & nodePath & """ """ & serveScript & """ """ & outDir & """ -l 3000"
Else
    cmd = "cmd.exe /c ""cd /d """ & appDir & """ && node node_modules\serve\build\main.js out -l 3000"""
End If

WshShell.Run cmd, 0, False
