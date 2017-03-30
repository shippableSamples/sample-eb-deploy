#!/bin/bash -e
check_jq() {
  {
    type jq &> /dev/null && echo "jq is already installed"
  } || {
    echo "Installing 'jq'"
    echo "----------------------------------------------"
    apt-get install -y jq
  }
}

get_commit_sha() {
  echo "----------------------------------------------"

  local ver_file_path="/build/IN/app-version/version.json"

  find -L "/build/IN/app-version"
  SHA=$(cat $ver_file_path \
    | jq -r '.version.propertyBag.commitSha')
  echo "COMMIT_SHA: $SHA"
}

run_deploy() {
  echo "----------------------------------------------"
  cd /build/IN/master-branch/gitRepo
  git reset --hard "$SHA"
  yes '' | eb init shippablesample -r us-west-2 -p Node.js
  eb deploy shippablesample-env
}

main() {
  check_jq
  get_commit_sha
  run_deploy
}

main
