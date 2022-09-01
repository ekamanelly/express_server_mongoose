#!/bin/dash
echo "github message ?"
read githubMessage 

echo "github banch ?"
read githubBranch 

if [ -z "$githubBranch" ] || [ -z "$githubBrach"] 
     then   
          echo "$githubBranch"
           sudo git  add .

            sudo git commit -m "$githubMessage"
            sudo git push origin  "$githubBranch"



fi        
