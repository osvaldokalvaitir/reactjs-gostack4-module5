import { runSaga } from "redux-saga";

import { getRepositories } from "../../store/sagas/repositories";
import { Creators as RepositoriesActions } from "../../store/ducks/repositories";

const response = [
  {
    id: 158606352,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTg2MDYzNTI=",
    name: "node-desafio1",
    full_name: "osvaldokalvaitir/node-desafio1",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/node-desafio1",
    description:
      " Application using Node.js, Express, Nunjucks, EditorConfig and ESLint",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/node-desafio1",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio1/deployments",
    created_at: "2018-11-21T21:08:28Z",
    updated_at: "2019-04-14T01:05:40Z",
    pushed_at: "2019-04-14T01:05:39Z",
    git_url: "git://github.com/osvaldokalvaitir/node-desafio1.git",
    ssh_url: "git@github.com:osvaldokalvaitir/node-desafio1.git",
    clone_url: "https://github.com/osvaldokalvaitir/node-desafio1.git",
    svn_url: "https://github.com/osvaldokalvaitir/node-desafio1",
    homepage: "",
    size: 109,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 160403446,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjA0MDM0NDY=",
    name: "node-desafio2",
    full_name: "osvaldokalvaitir/node-desafio2",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/node-desafio2",
    description:
      "GoBarber Application using Node.js, Express, Nunjucks and Sequelize",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/node-desafio2",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio2/deployments",
    created_at: "2018-12-04T18:45:31Z",
    updated_at: "2019-04-14T16:24:50Z",
    pushed_at: "2019-04-14T16:24:49Z",
    git_url: "git://github.com/osvaldokalvaitir/node-desafio2.git",
    ssh_url: "git@github.com:osvaldokalvaitir/node-desafio2.git",
    clone_url: "https://github.com/osvaldokalvaitir/node-desafio2.git",
    svn_url: "https://github.com/osvaldokalvaitir/node-desafio2",
    homepage: "",
    size: 356,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 161816476,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjE4MTY0NzY=",
    name: "node-desafio3",
    full_name: "osvaldokalvaitir/node-desafio3",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/node-desafio3",
    description:
      "Marketplace Application using Node.js, Express, Mongoose, Json Web Token, Nodemailer, Joi, Kue and Sentry",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/node-desafio3",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio3/deployments",
    created_at: "2018-12-14T17:03:34Z",
    updated_at: "2019-04-17T23:12:52Z",
    pushed_at: "2019-04-17T23:12:50Z",
    git_url: "git://github.com/osvaldokalvaitir/node-desafio3.git",
    ssh_url: "git@github.com:osvaldokalvaitir/node-desafio3.git",
    clone_url: "https://github.com/osvaldokalvaitir/node-desafio3.git",
    svn_url: "https://github.com/osvaldokalvaitir/node-desafio3",
    homepage: "",
    size: 230,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 179086999,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzkwODY5OTk=",
    name: "node-desafio4",
    full_name: "osvaldokalvaitir/node-desafio4",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/node-desafio4",
    description:
      "Application using Node.js, AdonisJs, ESLint, Moment, Raven-node, Mailtrap and Sentry",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/node-desafio4",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-desafio4/deployments",
    created_at: "2019-04-02T13:44:10Z",
    updated_at: "2019-04-17T22:28:46Z",
    pushed_at: "2019-04-17T22:28:45Z",
    git_url: "git://github.com/osvaldokalvaitir/node-desafio4.git",
    ssh_url: "git@github.com:osvaldokalvaitir/node-desafio4.git",
    clone_url: "https://github.com/osvaldokalvaitir/node-desafio4.git",
    svn_url: "https://github.com/osvaldokalvaitir/node-desafio4",
    homepage: "",
    size: 103,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 155311763,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTUzMTE3NjM=",
    name: "node-express-api",
    full_name: "osvaldokalvaitir/node-express-api",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/node-express-api",
    description:
      "Application using Node.js, Express, CORS, ESLint, Mongoose and Mongoose Paginate",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/node-express-api",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-express-api/deployments",
    created_at: "2018-10-30T02:25:58Z",
    updated_at: "2019-04-14T16:11:08Z",
    pushed_at: "2019-04-14T16:11:07Z",
    git_url: "git://github.com/osvaldokalvaitir/node-express-api.git",
    ssh_url: "git@github.com:osvaldokalvaitir/node-express-api.git",
    clone_url: "https://github.com/osvaldokalvaitir/node-express-api.git",
    svn_url: "https://github.com/osvaldokalvaitir/node-express-api",
    homepage: "",
    size: 139,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 174235117,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzQyMzUxMTc=",
    name: "node-forms",
    full_name: "osvaldokalvaitir/node-forms",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/node-forms",
    description: "Application using Node.js, Express, CORS and Morgan",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/node-forms",
    forks_url: "https://api.github.com/repos/osvaldokalvaitir/node-forms/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/osvaldokalvaitir/node-forms/teams",
    hooks_url: "https://api.github.com/repos/osvaldokalvaitir/node-forms/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/branches{/branch}",
    tags_url: "https://api.github.com/repos/osvaldokalvaitir/node-forms/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-forms/deployments",
    created_at: "2019-03-06T23:11:02Z",
    updated_at: "2019-04-14T16:41:54Z",
    pushed_at: "2019-04-14T16:41:52Z",
    git_url: "git://github.com/osvaldokalvaitir/node-forms.git",
    ssh_url: "git@github.com:osvaldokalvaitir/node-forms.git",
    clone_url: "https://github.com/osvaldokalvaitir/node-forms.git",
    svn_url: "https://github.com/osvaldokalvaitir/node-forms",
    homepage: "",
    size: 13,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 158377327,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTgzNzczMjc=",
    name: "node-modulo1",
    full_name: "osvaldokalvaitir/node-modulo1",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/node-modulo1",
    description:
      "Application using Node.js, Express, Nunjucks, EditorConfig and ESLint",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/node-modulo1",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/branches{/branch}",
    tags_url: "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo1/deployments",
    created_at: "2018-11-20T11:15:44Z",
    updated_at: "2019-04-14T14:57:26Z",
    pushed_at: "2019-04-14T14:57:24Z",
    git_url: "git://github.com/osvaldokalvaitir/node-modulo1.git",
    ssh_url: "git@github.com:osvaldokalvaitir/node-modulo1.git",
    clone_url: "https://github.com/osvaldokalvaitir/node-modulo1.git",
    svn_url: "https://github.com/osvaldokalvaitir/node-modulo1",
    homepage: "",
    size: 128,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 158622909,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTg2MjI5MDk=",
    name: "node-modulo2",
    full_name: "osvaldokalvaitir/node-modulo2",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/node-modulo2",
    description:
      "GoBarber Application using Node.js, Express, Nunjucks and Sequelize",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/node-modulo2",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/branches{/branch}",
    tags_url: "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo2/deployments",
    created_at: "2018-11-22T00:48:15Z",
    updated_at: "2019-04-14T16:24:46Z",
    pushed_at: "2019-04-14T16:24:45Z",
    git_url: "git://github.com/osvaldokalvaitir/node-modulo2.git",
    ssh_url: "git@github.com:osvaldokalvaitir/node-modulo2.git",
    clone_url: "https://github.com/osvaldokalvaitir/node-modulo2.git",
    svn_url: "https://github.com/osvaldokalvaitir/node-modulo2",
    homepage: "",
    size: 660,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 160731730,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjA3MzE3MzA=",
    name: "node-modulo3",
    full_name: "osvaldokalvaitir/node-modulo3",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/node-modulo3",
    description:
      "Marketplace Application using Node.js, Express, Mongoose, Json Web Token, Nodemailer, Joi, Kue and Sentry",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/node-modulo3",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/branches{/branch}",
    tags_url: "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo3/deployments",
    created_at: "2018-12-06T21:03:53Z",
    updated_at: "2019-04-17T23:09:23Z",
    pushed_at: "2019-04-17T23:09:21Z",
    git_url: "git://github.com/osvaldokalvaitir/node-modulo3.git",
    ssh_url: "git@github.com:osvaldokalvaitir/node-modulo3.git",
    clone_url: "https://github.com/osvaldokalvaitir/node-modulo3.git",
    svn_url: "https://github.com/osvaldokalvaitir/node-modulo3",
    homepage: "",
    size: 646,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 178105830,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzgxMDU4MzA=",
    name: "node-modulo4",
    full_name: "osvaldokalvaitir/node-modulo4",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/node-modulo4",
    description:
      "Application using Node.js, AdonisJs, ESLint, Moment, Raven-node, Mailtrap and Sentry",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/node-modulo4",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/branches{/branch}",
    tags_url: "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo4/deployments",
    created_at: "2019-03-28T01:54:32Z",
    updated_at: "2019-04-17T22:30:54Z",
    pushed_at: "2019-04-17T22:30:52Z",
    git_url: "git://github.com/osvaldokalvaitir/node-modulo4.git",
    ssh_url: "git@github.com:osvaldokalvaitir/node-modulo4.git",
    clone_url: "https://github.com/osvaldokalvaitir/node-modulo4.git",
    svn_url: "https://github.com/osvaldokalvaitir/node-modulo4",
    homepage: "",
    size: 464,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 178105802,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzgxMDU4MDI=",
    name: "node-modulo5",
    full_name: "osvaldokalvaitir/node-modulo5",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/node-modulo5",
    description:
      "Application using Node.js, Express, Jest, SuperTest, Factory Girl, Faker.js, Sequelize and Nodemailer",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/node-modulo5",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/branches{/branch}",
    tags_url: "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo5/deployments",
    created_at: "2019-03-28T01:54:21Z",
    updated_at: "2019-04-17T17:03:34Z",
    pushed_at: "2019-04-17T17:03:33Z",
    git_url: "git://github.com/osvaldokalvaitir/node-modulo5.git",
    ssh_url: "git@github.com:osvaldokalvaitir/node-modulo5.git",
    clone_url: "https://github.com/osvaldokalvaitir/node-modulo5.git",
    svn_url: "https://github.com/osvaldokalvaitir/node-modulo5",
    homepage: "",
    size: 362,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 178105771,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzgxMDU3NzE=",
    name: "node-modulo6",
    full_name: "osvaldokalvaitir/node-modulo6",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/node-modulo6",
    description:
      "Deploy and CI using Heroku, GitHub and mLab. Or using Ubuntu, DigitalOcean, GitHub, MongoDB, PM2, Nginx and Buddy",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/node-modulo6",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/branches{/branch}",
    tags_url: "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/node-modulo6/deployments",
    created_at: "2019-03-28T01:54:10Z",
    updated_at: "2019-04-23T22:41:56Z",
    pushed_at: "2019-04-23T22:41:54Z",
    git_url: "git://github.com/osvaldokalvaitir/node-modulo6.git",
    ssh_url: "git@github.com:osvaldokalvaitir/node-modulo6.git",
    clone_url: "https://github.com/osvaldokalvaitir/node-modulo6.git",
    svn_url: "https://github.com/osvaldokalvaitir/node-modulo6",
    homepage: "",
    size: 82,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 159527378,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTk1MjczNzg=",
    name: "projects-settings",
    full_name: "osvaldokalvaitir/projects-settings",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/projects-settings",
    description: "GitHub's Node.js, ReactJS and React Native project settings",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/projects-settings",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/projects-settings/deployments",
    created_at: "2018-11-28T15:55:45Z",
    updated_at: "2019-04-26T00:25:57Z",
    pushed_at: "2019-04-26T00:25:56Z",
    git_url: "git://github.com/osvaldokalvaitir/projects-settings.git",
    ssh_url: "git@github.com:osvaldokalvaitir/projects-settings.git",
    clone_url: "https://github.com/osvaldokalvaitir/projects-settings.git",
    svn_url: "https://github.com/osvaldokalvaitir/projects-settings",
    homepage: "",
    size: 638,
    stargazers_count: 2,
    watchers_count: 2,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 2,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 2,
    open_issues: 0,
    watchers: 2,
    default_branch: "master"
  },
  {
    id: 167996333,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjc5OTYzMzM=",
    name: "react-native-desafio1",
    full_name: "osvaldokalvaitir/react-native-desafio1",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/react-native-desafio1",
    description:
      "Application using React Native, ESLint, Prettier, EditorConfig, Babel Root Import, Babel Module Resolver, React DevTools, prop-types, DebugJS and Reactotron",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio1/deployments",
    created_at: "2019-01-28T16:37:50Z",
    updated_at: "2019-04-14T01:09:14Z",
    pushed_at: "2019-04-14T01:09:12Z",
    git_url: "git://github.com/osvaldokalvaitir/react-native-desafio1.git",
    ssh_url: "git@github.com:osvaldokalvaitir/react-native-desafio1.git",
    clone_url: "https://github.com/osvaldokalvaitir/react-native-desafio1.git",
    svn_url: "https://github.com/osvaldokalvaitir/react-native-desafio1",
    homepage: "",
    size: 669,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 169559886,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjk1NTk4ODY=",
    name: "react-native-desafio2",
    full_name: "osvaldokalvaitir/react-native-desafio2",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/react-native-desafio2",
    description:
      "GitIssues Application using React Native, ESLint, EditorConfig, Babel Root Import, Babel Module Resolver, prop-types, React Navigation, React Native Vector Icons, React DevTools and Reactotron.",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio2/deployments",
    created_at: "2019-02-07T11:17:09Z",
    updated_at: "2019-04-14T21:59:50Z",
    pushed_at: "2019-04-14T21:59:49Z",
    git_url: "git://github.com/osvaldokalvaitir/react-native-desafio2.git",
    ssh_url: "git@github.com:osvaldokalvaitir/react-native-desafio2.git",
    clone_url: "https://github.com/osvaldokalvaitir/react-native-desafio2.git",
    svn_url: "https://github.com/osvaldokalvaitir/react-native-desafio2",
    homepage: "",
    size: 1893,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 172116260,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzIxMTYyNjA=",
    name: "react-native-desafio3",
    full_name: "osvaldokalvaitir/react-native-desafio3",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/react-native-desafio3",
    description:
      "Application using React Native, ESLint, EditorConfig, Babel Root Import, Redux, Redux-Saga, Ducks, Reactotron and Mapbox",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-desafio3/deployments",
    created_at: "2019-02-22T18:34:10Z",
    updated_at: "2019-04-14T17:58:07Z",
    pushed_at: "2019-04-14T17:58:06Z",
    git_url: "git://github.com/osvaldokalvaitir/react-native-desafio3.git",
    ssh_url: "git@github.com:osvaldokalvaitir/react-native-desafio3.git",
    clone_url: "https://github.com/osvaldokalvaitir/react-native-desafio3.git",
    svn_url: "https://github.com/osvaldokalvaitir/react-native-desafio3",
    homepage: "",
    size: 1671,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 166885725,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjY4ODU3MjU=",
    name: "react-native-mobile",
    full_name: "osvaldokalvaitir/react-native-mobile",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/react-native-mobile",
    description:
      "Application in React Native by running CRUD in the Node - Express API",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-mobile/deployments",
    created_at: "2019-01-21T21:50:47Z",
    updated_at: "2019-04-14T16:11:52Z",
    pushed_at: "2019-04-14T16:11:51Z",
    git_url: "git://github.com/osvaldokalvaitir/react-native-mobile.git",
    ssh_url: "git@github.com:osvaldokalvaitir/react-native-mobile.git",
    clone_url: "https://github.com/osvaldokalvaitir/react-native-mobile.git",
    svn_url: "https://github.com/osvaldokalvaitir/react-native-mobile",
    homepage: "",
    size: 1016,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 167683070,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjc2ODMwNzA=",
    name: "react-native-modulo1",
    full_name: "osvaldokalvaitir/react-native-modulo1",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/react-native-modulo1",
    description:
      "Application using React Native, ESLint, Prettier, EditorConfig, Babel Root Import, Babel Module Resolver, React DevTools, prop-types, DebugJS and Reactotron",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo1/deployments",
    created_at: "2019-01-26T11:50:34Z",
    updated_at: "2019-04-14T16:48:39Z",
    pushed_at: "2019-04-14T16:48:38Z",
    git_url: "git://github.com/osvaldokalvaitir/react-native-modulo1.git",
    ssh_url: "git@github.com:osvaldokalvaitir/react-native-modulo1.git",
    clone_url: "https://github.com/osvaldokalvaitir/react-native-modulo1.git",
    svn_url: "https://github.com/osvaldokalvaitir/react-native-modulo1",
    homepage: "",
    size: 612,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Objective-C",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 168724309,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjg3MjQzMDk=",
    name: "react-native-modulo2",
    full_name: "osvaldokalvaitir/react-native-modulo2",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/react-native-modulo2",
    description:
      "Githuber Application using React Native, ESLint, Prettier, EditorConfig, Babel Root Import, Babel Module Resolver, prop-types, React Navigation, React Native Vector Icons, react-native-status-bar-height and Reactotron.",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo2/deployments",
    created_at: "2019-02-01T16:12:33Z",
    updated_at: "2019-04-14T21:42:18Z",
    pushed_at: "2019-04-14T21:42:16Z",
    git_url: "git://github.com/osvaldokalvaitir/react-native-modulo2.git",
    ssh_url: "git@github.com:osvaldokalvaitir/react-native-modulo2.git",
    clone_url: "https://github.com/osvaldokalvaitir/react-native-modulo2.git",
    svn_url: "https://github.com/osvaldokalvaitir/react-native-modulo2",
    homepage: "",
    size: 1609,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 170155863,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzAxNTU4NjM=",
    name: "react-native-modulo3",
    full_name: "osvaldokalvaitir/react-native-modulo3",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/react-native-modulo3",
    description:
      "Gitmark Application using React Native, ESLint, EditorConfig, Babel Root Import, Babel Module Resolver, React Navigation, Color, Redux, Redux-Saga, Ducks and Reactotron",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo3/deployments",
    created_at: "2019-02-11T15:49:36Z",
    updated_at: "2019-04-14T18:06:48Z",
    pushed_at: "2019-04-14T18:06:46Z",
    git_url: "git://github.com/osvaldokalvaitir/react-native-modulo3.git",
    ssh_url: "git@github.com:osvaldokalvaitir/react-native-modulo3.git",
    clone_url: "https://github.com/osvaldokalvaitir/react-native-modulo3.git",
    svn_url: "https://github.com/osvaldokalvaitir/react-native-modulo3",
    homepage: "",
    size: 1096,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 183112538,
    node_id: "MDEwOlJlcG9zaXRvcnkxODMxMTI1Mzg=",
    name: "react-native-modulo4",
    full_name: "osvaldokalvaitir/react-native-modulo4",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/react-native-modulo4",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo4/deployments",
    created_at: "2019-04-23T23:51:40Z",
    updated_at: "2019-04-23T23:51:40Z",
    pushed_at: "2019-04-23T23:51:40Z",
    git_url: "git://github.com/osvaldokalvaitir/react-native-modulo4.git",
    ssh_url: "git@github.com:osvaldokalvaitir/react-native-modulo4.git",
    clone_url: "https://github.com/osvaldokalvaitir/react-native-modulo4.git",
    svn_url: "https://github.com/osvaldokalvaitir/react-native-modulo4",
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 183112563,
    node_id: "MDEwOlJlcG9zaXRvcnkxODMxMTI1NjM=",
    name: "react-native-modulo5",
    full_name: "osvaldokalvaitir/react-native-modulo5",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/react-native-modulo5",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo5/deployments",
    created_at: "2019-04-23T23:51:54Z",
    updated_at: "2019-04-23T23:51:54Z",
    pushed_at: "2019-04-23T23:51:54Z",
    git_url: "git://github.com/osvaldokalvaitir/react-native-modulo5.git",
    ssh_url: "git@github.com:osvaldokalvaitir/react-native-modulo5.git",
    clone_url: "https://github.com/osvaldokalvaitir/react-native-modulo5.git",
    svn_url: "https://github.com/osvaldokalvaitir/react-native-modulo5",
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 183112575,
    node_id: "MDEwOlJlcG9zaXRvcnkxODMxMTI1NzU=",
    name: "react-native-modulo6",
    full_name: "osvaldokalvaitir/react-native-modulo6",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/react-native-modulo6",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-modulo6/deployments",
    created_at: "2019-04-23T23:52:05Z",
    updated_at: "2019-04-23T23:52:05Z",
    pushed_at: "2019-04-23T23:52:05Z",
    git_url: "git://github.com/osvaldokalvaitir/react-native-modulo6.git",
    ssh_url: "git@github.com:osvaldokalvaitir/react-native-modulo6.git",
    clone_url: "https://github.com/osvaldokalvaitir/react-native-modulo6.git",
    svn_url: "https://github.com/osvaldokalvaitir/react-native-modulo6",
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 167850189,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjc4NTAxODk=",
    name: "react-native-styling-cheat-sheet",
    full_name: "osvaldokalvaitir/react-native-styling-cheat-sheet",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url:
      "https://github.com/osvaldokalvaitir/react-native-styling-cheat-sheet",
    description: "Most of the React Native styling material in one page",
    fork: true,
    url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/react-native-styling-cheat-sheet/deployments",
    created_at: "2019-01-27T19:37:27Z",
    updated_at: "2019-01-27T19:37:29Z",
    pushed_at: "2018-11-24T06:38:22Z",
    git_url:
      "git://github.com/osvaldokalvaitir/react-native-styling-cheat-sheet.git",
    ssh_url:
      "git@github.com:osvaldokalvaitir/react-native-styling-cheat-sheet.git",
    clone_url:
      "https://github.com/osvaldokalvaitir/react-native-styling-cheat-sheet.git",
    svn_url:
      "https://github.com/osvaldokalvaitir/react-native-styling-cheat-sheet",
    homepage: "",
    size: 20,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 162456190,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjI0NTYxOTA=",
    name: "reactjs-desafio1",
    full_name: "osvaldokalvaitir/reactjs-desafio1",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/reactjs-desafio1",
    description:
      "RocketBook Application using ReactJS, Babel, Webpack, prop-types, Style Loader, CSS Loader, Sass Loader, EditorConfig, React DevTools, ESLint and Prettier",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio1/deployments",
    created_at: "2018-12-19T15:26:44Z",
    updated_at: "2019-04-14T01:02:17Z",
    pushed_at: "2019-04-14T01:02:15Z",
    git_url: "git://github.com/osvaldokalvaitir/reactjs-desafio1.git",
    ssh_url: "git@github.com:osvaldokalvaitir/reactjs-desafio1.git",
    clone_url: "https://github.com/osvaldokalvaitir/reactjs-desafio1.git",
    svn_url: "https://github.com/osvaldokalvaitir/reactjs-desafio1",
    homepage: "",
    size: 368,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 163530737,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjM1MzA3Mzc=",
    name: "reactjs-desafio2",
    full_name: "osvaldokalvaitir/reactjs-desafio2",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/reactjs-desafio2",
    description:
      "GitHub Compare Application using Create React App, ESLint, prop-types, styled-components, Axios, Moment, Font Awesome and Local Storage",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio2/deployments",
    created_at: "2018-12-29T18:00:07Z",
    updated_at: "2019-04-15T23:17:24Z",
    pushed_at: "2019-04-15T23:17:22Z",
    git_url: "git://github.com/osvaldokalvaitir/reactjs-desafio2.git",
    ssh_url: "git@github.com:osvaldokalvaitir/reactjs-desafio2.git",
    clone_url: "https://github.com/osvaldokalvaitir/reactjs-desafio2.git",
    svn_url: "https://github.com/osvaldokalvaitir/reactjs-desafio2",
    homepage: "",
    size: 262,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 165512686,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjU1MTI2ODY=",
    name: "reactjs-desafio3",
    full_name: "osvaldokalvaitir/reactjs-desafio3",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/reactjs-desafio3",
    description:
      "Application using Redux, Redux-Saga, Ducks, React Router, react-map-gl, react-modal, react-toastify, Reactotron and Mapbox",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-desafio3/deployments",
    created_at: "2019-01-13T14:08:19Z",
    updated_at: "2019-04-17T22:32:11Z",
    pushed_at: "2019-04-17T22:32:09Z",
    git_url: "git://github.com/osvaldokalvaitir/reactjs-desafio3.git",
    ssh_url: "git@github.com:osvaldokalvaitir/reactjs-desafio3.git",
    clone_url: "https://github.com/osvaldokalvaitir/reactjs-desafio3.git",
    svn_url: "https://github.com/osvaldokalvaitir/reactjs-desafio3",
    homepage: "",
    size: 1959,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 174236928,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzQyMzY5Mjg=",
    name: "reactjs-forms",
    full_name: "osvaldokalvaitir/reactjs-forms",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/reactjs-forms",
    description:
      "Application using Create React App, Axios, React Router, Formik, Yup and React-Select consuming the features of the Node - Forms API",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-forms/deployments",
    created_at: "2019-03-06T23:30:26Z",
    updated_at: "2019-04-15T23:14:47Z",
    pushed_at: "2019-04-15T23:14:46Z",
    git_url: "git://github.com/osvaldokalvaitir/reactjs-forms.git",
    ssh_url: "git@github.com:osvaldokalvaitir/reactjs-forms.git",
    clone_url: "https://github.com/osvaldokalvaitir/reactjs-forms.git",
    svn_url: "https://github.com/osvaldokalvaitir/reactjs-forms",
    homepage: "",
    size: 220,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 155891227,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTU4OTEyMjc=",
    name: "reactjs-front",
    full_name: "osvaldokalvaitir/reactjs-front",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/reactjs-front",
    description:
      "Application in ReactJS by running CRUD in the Node - Express API",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/reactjs-front",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-front/deployments",
    created_at: "2018-11-02T16:13:33Z",
    updated_at: "2019-04-14T16:11:29Z",
    pushed_at: "2019-04-14T16:11:27Z",
    git_url: "git://github.com/osvaldokalvaitir/reactjs-front.git",
    ssh_url: "git@github.com:osvaldokalvaitir/reactjs-front.git",
    clone_url: "https://github.com/osvaldokalvaitir/reactjs-front.git",
    svn_url: "https://github.com/osvaldokalvaitir/reactjs-front",
    homepage: "",
    size: 357,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 175972077,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzU5NzIwNzc=",
    name: "reactjs-hooks",
    full_name: "osvaldokalvaitir/reactjs-hooks",
    private: false,
    owner: {
      login: "osvaldokalvaitir",
      id: 40433049,
      node_id: "MDQ6VXNlcjQwNDMzMDQ5",
      avatar_url: "https://avatars0.githubusercontent.com/u/40433049?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/osvaldokalvaitir",
      html_url: "https://github.com/osvaldokalvaitir",
      followers_url: "https://api.github.com/users/osvaldokalvaitir/followers",
      following_url:
        "https://api.github.com/users/osvaldokalvaitir/following{/other_user}",
      gists_url:
        "https://api.github.com/users/osvaldokalvaitir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/osvaldokalvaitir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/osvaldokalvaitir/subscriptions",
      organizations_url: "https://api.github.com/users/osvaldokalvaitir/orgs",
      repos_url: "https://api.github.com/users/osvaldokalvaitir/repos",
      events_url:
        "https://api.github.com/users/osvaldokalvaitir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/osvaldokalvaitir/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/osvaldokalvaitir/reactjs-hooks",
    description: "Application in ReactJS using Hooks",
    fork: false,
    url: "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks",
    forks_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/forks",
    keys_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/teams",
    hooks_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/hooks",
    issue_events_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/events",
    assignees_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/tags",
    blobs_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/languages",
    stargazers_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/stargazers",
    contributors_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/contributors",
    subscribers_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/subscribers",
    subscription_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/subscription",
    commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/merges",
    archive_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/downloads",
    issues_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/labels{/name}",
    releases_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/osvaldokalvaitir/reactjs-hooks/deployments",
    created_at: "2019-03-16T12:56:28Z",
    updated_at: "2019-04-14T17:41:02Z",
    pushed_at: "2019-04-14T17:41:01Z",
    git_url: "git://github.com/osvaldokalvaitir/reactjs-hooks.git",
    ssh_url: "git@github.com:osvaldokalvaitir/reactjs-hooks.git",
    clone_url: "https://github.com/osvaldokalvaitir/reactjs-hooks.git",
    svn_url: "https://github.com/osvaldokalvaitir/reactjs-hooks",
    homepage: "",
    size: 273,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  }
];

describe("Repositories Saga", () => {
  it("should be able to fetch repositories", async () => {
    const dispatched = [];

    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        }
      },
      getRepositories
    ).toPromise();

    expect(dispatched).toContainEqual(RepositoriesActions.getSuccess(response));
  });
});
