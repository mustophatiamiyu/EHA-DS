#!/bin/bash

# Usage: ./create-component.sh Button
COMPONENT_NAME=$1

if [ -z "$COMPONENT_NAME" ]; then
  echo "Usage: ./create-component.sh ComponentName"
  exit 1
fi

COMPONENT_DIR="src/components/${COMPONENT_NAME}"

# Create directory
mkdir -p "${COMPONENT_DIR}"

# Create component
sed "s/COMPONENT_NAME/${COMPONENT_NAME}/g" COMPONENT_TEMPLATE.tsx > "${COMPONENT_DIR}/${COMPONENT_NAME}.tsx"

# Create stories
sed "s/COMPONENT_NAME/${COMPONENT_NAME}/g" STORY_TEMPLATE.tsx > "${COMPONENT_DIR}/${COMPONENT_NAME}.stories.tsx"

# Create index
echo "export { ${COMPONENT_NAME} } from './${COMPONENT_NAME}';" > "${COMPONENT_DIR}/index.ts"

# Update main components index
echo "export * from './${COMPONENT_NAME}';" >> src/components/index.ts

echo "✅ Created ${COMPONENT_NAME} component"