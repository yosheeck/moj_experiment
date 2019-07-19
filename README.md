# What is it ?
This is quick demo/experiment for MoJ (Ministry of Justice). It's a simple API solving simple problem.

The task itself is [explained here](task.md)

# Depedencies
I'm using:
- express as server
- mocha and should as test runners (tests only)
- node-fetch as API fetcher (tests only)
- terminal-colors to show nice logs on console

# What's done
## Structure
- The code is in \src.
- Tests in \tests

## Server code
The API works on port 3000 by default.
- it passes tests,
- it does what's defined in requirements
- it's NOT very well checked for corner cases (as this wasn't a requirement), so not production ready ;)

## Tests
I'm auto testing 2 things as this was quicker to do it as TDD, than test manually:
1. The unit test for hash function
2. The API level (integration? e2e?) test for cases mentioned in the task definition

## Heroku compatiblity
That MAY BE only missing requirement as I never had a working Heroku account.
I've read quickly Heroku docs related to node.js deployments and I don't see why this code would fail on Heroku.
This code has no magic and probably running it on AWS or any other cloud shouldn't be a problem.
However, I didn't test that to save time and finish this week - if that's a strong requirement, please let me know, I'll make sure it's deployable.

# Run server
Just

    npm start

to develop

    nodemon src\index.js

# Run tests
Tests are run as part of server boot process (after server is ready). It's obviously not a production-level solution, but works well for development.

To run tests manually

    npm tests

or with nodemon

    nodemon tests\index.js
