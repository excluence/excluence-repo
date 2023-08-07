clear
sudo apt update
sudo apt install openjdk-17-jre
clear
sudo wget -O /etc/yum.repos.d/jenkins.repo     https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo wget -O /etc/yum.repos.d/jenkins.repo     https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key
clear
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key |sudo gpg --dearmor -o /usr/share/keyrings/jenkins.gpg
sudo sh -c 'echo deb [signed-by=/usr/share/keyrings/jenkins.gpg] http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update
sudo apt install jenkins
sudo systemctl start jenkins.service
clear
sudo apt update
sudo apt install openjdk-8-jdk 
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update
sudo apt install jenkins
clear
sudo apt update
curl -fsSL https://pkg.jenkins.io/debian/jenkins.io.key | sudo tee \   /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \   https://pkg.jenkins.io/debian binary/ | sudo tee \   /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins
sudo systemctl enable jenkins
sudo systemctl start jenkins
sudo systemctl status jenkins
ssh 13.232.201.102:8080
jenkins --version
sudo systemctl enable jenkins
sudo systemctl start jenkins
sudo systemctl status jenkins
echo /var/lib/jenkins/secrets/initialAdminPassword
cat /var/lib/jenkins/secrets/initialAdminPassword
sudo su
clear
git --version
sudo git remote -iv
sudo git remote -v
git login
clear
sudo git remote set-url origin git@github.com:excluence/excluence-repo.git
clear
sudo dnf install git-all
sudo apt install git-all
clear
sudo apt install git-all
git --version
sudo git remote -v
sudo git remote set-url origin git@github.com:excluence/excluence-repo.git
vim /etc/passwd
clear
ls
cd ..
ls
cd ubuntu/
clear
ls
git rempote -v
sudo git remote -v
sudo git init
sudo git remote -v
sudo git remote set-url origin git@github.com:JaisPiyush/excluence_test_cicd.git
sudo git remote set-url git@github.com:JaisPiyush/excluence_test_cicd.git
sudo git remote set-url --add excluence_test git@github.com:JaisPiyush/excluence_test_cicd.git
sudo git remote set-url --add git@github.com:JaisPiyush/excluence_test_cicd.git
git status
clear
mkdir projects
cd projects/
sudo git remote set-url origin git@github.com:JaisPiyush/excluence_test_cicd.git
sudo git remote -v
sudo git remote set-url origin https://github.com/JaisPiyush/excluence_test_cicd.git
git push -u origin master
git init git add --all git commit -m "first commit"
clear
git status
git config --global --add safe.directory /media/data/users/jhu3szh/serialize
sudo git remote -v
sudo git remote set-url origin https://github.com/JaisPiyush/excluence_test_cicd.git
git config --global --add safe.directory '*'
sudo git remote set-url origin https://github.com/JaisPiyush/excluence_test_cicd.git
