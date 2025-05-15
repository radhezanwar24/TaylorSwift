@echo off
echo Setting up Git repository...
echo # TaylorSwift > README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/radhezanwar24/TaylorSwift.git
git push -u origin main
echo Git setup complete!
