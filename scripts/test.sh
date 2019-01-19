#!/bin/bash

echo "Begin unit tests."

echo "Test integer generator module:"
echo "Generate 100 problems"
node app.js

echo "Test fractional generator module:"
echo "Generate 100 problems"
node app.js

echo "Test solver module:"
node app.js

echo "Test quiz mode:"
node app.js