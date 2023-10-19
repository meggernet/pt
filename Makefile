#
# Makefile
#

.PHONY: help
.DEFAULT_GOAL := help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

# ------------------------------------------------------------------------------------------------------------

install: ## Install all dependencies
	npm ci

# ------------------------------------------------------------------------------------------------------------

lint: ## Starts the linter
	npm run lint

test-unit: ## Starts all unit tests
	npm run test:unit --coverage

test-stryker: ## Starts tests with stryker
	npm run test:stryker

# ------------------------------------------------------------------------------------------------------------

open-test-reports: ## Opens the test reports
	open ./.reports/jest/lcov-report/index.html
	open ./.reports/stryker/report.html
