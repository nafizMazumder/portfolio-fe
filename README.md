command to update the author and committer details for all commits from HEAD

git filter-branch -f --env-filter '
  GIT_AUTHOR_NAME="nafiz";
  GIT_AUTHOR_EMAIL="nafizuddin80@gmail.com";
  GIT_COMMITTER_NAME="nafiz";
  GIT_COMMITTER_EMAIL="nafizuddin80@gmail.com";
' HEAD


git push --force
