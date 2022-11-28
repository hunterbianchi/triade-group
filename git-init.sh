#!/bin/bash


package_version=`cat ./package.json | grep "version" | awk '{printf $2}'`
version="${package_version:1:((${#package_version} - 3))}"

read -p "New version [Current: ($version)]: " new_version

[ $new_version ] && {

    sleep 2
    echo -e "\n\tError while wrighting '$new_version' to package.json's version\n\n\tSOLUTION:\tChange manualy before start auto-git.sh\n"
    exit 0

} || {
    message="Auto commited by Hunter Biachi\'s bash script"
    git add .
    git commit -m 'Version: ($version), -$message'
    git push
}
init () {

    git init

    git remote add origin git@github.com:hunterbianchi/triade-group.git

    git add .

    git commit -m 'Version: ($version), -$message'

    git push --set-upstream origin main

    git push
}




# To redirect stdout to file.txt:
# 
# echo test > file.txt
# 
# This is equivalent to:
# 
# echo test 1> file.txt
# 
# To redirect stderr to file.txt:
# 
# echo test 2> file.txt
# 
# So >& is the syntax to redirect a stream to another file descriptor:
# 
#     0 is stdin
#     1 is stdout
#     2 is stderr
# 
# To redirect stdout to stderr:
# 
# echo test 1>&2   # equivalently, echo test >&2
# 
# To redirect stderr to stdout:
# 
# echo test 2>&1
# 
# Thus, in 2>&1:
# 
#     2> redirects stderr to an (unspecified) file.
#     &1 redirects stderr to stdout.
# 
# 