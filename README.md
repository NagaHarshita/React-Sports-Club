# React-Sports-Club
As a part of the course Applied Software Engineering-I, with 6 of our team members, we are building this web app for all the employees of a company to use it's sports place according to schedule.

## Guidelines to group members

First set up git bash in your local machine following the guidelines mentioned in the step-by-step tutorial  https://phoenixnap.com/kb/how-to-install-git-windows

Follow these guidelines to succesfully set up a remote repository in your local machine, push changes to it and put a pull request.

#### 1. Fork the repository 
Navigate to the project link https://github.com/NagaHarshita/React-Sports-Club and fork the repo by clicking the option fork mentioned in the top right side corner. 

https://help.github.com/en/github/getting-started-with-github/fork-a-repo

#### 2. Clone the repository 
Clone the repo by executing the below command. 

```
git clone https://github.com/NagaHarshita/React-Sports-Club.git
```
https://confluence.atlassian.com/bitbucket/clone-a-repository-223217891.html

#### 3. List the current configured remote repository for your fork.
Check the remote repositories.

```
git remote -v
```
This should contain your forked repo url.
https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork

#### 4. Specify a new remote upstream repository that will be synced with the fork.
```
git remote add upstream https://github.com/NagaHarshita/React-Sports-Club.git
```
https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork

#### 5. Verify the new upstream repository you've specified for your fork.

```
git remote -v
```

Verify if the above command displays the same as  
origin - Your forked repo link

upstream - original repo link

https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork

#### 6. Keep fork and local repos up to date with the upstream

Checkout to master branch
```
git checkout master
```

Fetches from upstream and origin and prunes any deleted branches
```
git fetch --all --prune
```

Reset the head to the last commit in the upstream's master repo
```
git reset --hard upstream/master
```

Push these changes to origin so that both fork and local repos are made up to date
```
git push origin master
```

#### 7. Create a new branch

This is the branch you will be working on.
```
git checkout -b {New Branch Name}
```

#### 8. Make changes in code
#### 9. Add the changes to the remote repo
```
git add * 
```
#### 10. Commit the changes you made
```
git commit -m "{commit message}"
```
#### 11. Push the changes to the fork repo
```
git push origin master
```
#### 12. Make a pull request
Go to your fork repo in github and click on the pull request button to make a PR which will further be reviewed and merged to the project repo.

#### 13. Repeat steps 8,9,10 for making further changes  


## Setting up ReactJs environment in local machine 
#### 1. Install Node.js
Download the 12.18.0 LTS version of Node.js for windows through this link https://nodejs.org/en/
#### 2. Check node and npm versions 
```
node --version
npm --version
```
#### 3. create-react-app for windows
```
npm install -g create-react-app
``` 
#### 4. Run the app 
Go to the folder where your local repo is present(the one you downloaded/cloned from previous steps). And execute the following command

```
npm start
```
Check create-react-app on windows section for futher clarification in the following guide.
https://www.robinwieruch.de/react-js-windows-setup

This should run your app on the localhost. Make changes to the code and again run it in localhost using step 4.






