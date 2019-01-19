#!/bin/bash

echo "Begin unit tests."

echo "Test integer generator module:"
echo "Generate 100 problems"
yarn start

echo "Test fractional generator module:"
echo "Generate 100 problems"
yarn start

echo "Test solver module:"
yarn start

echo "Test quiz mode:"
yarn start