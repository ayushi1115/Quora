# CMPE273_GroupProject
CMPE273_GroupProject

Hi Guys,
Some rules for GIT commit.
1) No one will commit directly on the master branch.
2) Please push your code on the local branch of your own. (I will guide how to do it.)
3) Plese do the cloning now and then. (its prefered to do cloning after every Push.) This will make sure you have latest version of Codes. We need to do this because along with you our teammates will also be pushing there codes, which can cause conflict in the master branch at time of pull request. And this is also the reason we are not allowed to push code to master branch.
4) Rest we will discuss in the team meeting.

Steps :
1) Clone via command prompt SSH in your local system.
2) Make desire changes.
3) Check for git Status
4) Make a Local branch of your name.  Eg. git branch Pranjal
5) then checkout to new branch. eg. git checkout Pranjal (this will change the branch).
6) now add the changes e.g. git add . 
7) Now do the git commit with desire message e.g.  git commit -m "Chage type"
8) git push 

Above will create a new branch in github. (Pranjal branch will be create in github.com)
Now create a new pull request from your branch to merge it to master branch. This will prompt error (approval required) 
Take one approval from anyone of team mates. 
This will check the conflict. 

>>> then it will get merged to master.
