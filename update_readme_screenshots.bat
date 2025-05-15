@echo off
echo Updating README.md with screenshot information and pushing to GitHub...
git add README.md
git add screenshots/*.png
git commit -m "Add screenshots and update README.md"
git push
echo Update complete!
