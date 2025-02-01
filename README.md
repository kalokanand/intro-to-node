Initialize Git
git config --global user.name "Your Name"
git config --global user.email "you@youraddress.com"
git config --global push.default matching
git config --global alias.co checkout
git init
				
Add Files To Git
git add .
git commit -m "Commit Message"
git push

Push an existing repository 
git remote add origin git@github.com:kalokanand/intro-to-node.git
git push -u origin master
