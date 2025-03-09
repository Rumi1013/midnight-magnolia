import fs from "fs"
import path from "path"

// Colors for terminal output
const colors = {
  reset: "\x1b[0m",
  gold: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  green: "\x1b[32m",
  red: "\x1b[31m",
}

console.log(`${colors.gold}
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║  ${colors.magenta}Midnight Magnolia Script Creator${colors.gold}                      ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
${colors.reset}`)

// The content of the deploy-to-wix.js script
const scriptContent = `import { execSync } from 'child_process';
import readline from 'readline';
import fs from 'fs';

// Colors for terminal output
const colors = {
  reset: '\\x1b[0m',
  gold: '\\x1b[33m',
  blue: '\\x1b[34m',
  magenta: '\\x1b[35m',
  cyan: '\\x1b[36m',
  green: '\\x1b[32m',
  red: '\\x1b[31m'
};

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to ask questions
function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// Function to execute commands and log output
function executeCommand(command, description) {
  console.log(\`\${colors.blue}> \${description}...\${colors.reset}\`);
  try {
    const output = execSync(command, { encoding: 'utf8' });
    if (output.trim()) {
      console.log(\`\${colors.cyan}\${output}\${colors.reset}\`);
    }
    console.log(\`\${colors.green}✓ Completed: \${description}\${colors.reset}\\n\`);
    return true;
  } catch (error) {
    console.error(\`\${colors.red}Error: \${error.message}\${colors.reset}\`);
    return false;
  }
}

// Check if Wix CLI is installed
function checkWixCli() {
  try {
    execSync('wix --version', { encoding: 'utf8' });
    return true;
  } catch (error) {
    return false;
  }
}

// Main function
async function main() {
  console.log(\`\${colors.gold}
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║  \${colors.magenta}Midnight Magnolia Wix Deployment\${colors.gold}                       ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
\${colors.reset}\`);

  // Check if Wix CLI is installed
  if (!checkWixCli()) {
    console.log(\`\${colors.red}Wix CLI is not installed. Installing now...\${colors.reset}\`);
    executeCommand('npm install -g @wix/cli', 'Installing Wix CLI');
    
    if (!checkWixCli()) {
      console.log(\`\${colors.red}Failed to install Wix CLI. Please install it manually with 'npm install -g @wix/cli'\${colors.reset}\`);
      rl.close();
      return;
    }
  }

  // Check if user is logged in to Wix
  try {
    execSync('wix login:status', { encoding: 'utf8' });
  } catch (error) {
    console.log(\`\${colors.blue}You need to log in to Wix first.\${colors.reset}\`);
    executeCommand('wix login', 'Logging in to Wix');
  }

  // Check if we're in the right directory
  if (!fs.existsSync('./wix.config.json')) {
    console.log(\`\${colors.red}wix.config.json not found. Make sure you're in the root directory of your Wix project.\${colors.reset}\`);
    rl.close();
    return;
  }

  // Ask which branch to deploy
  const branch = await askQuestion(\`\${colors.gold}Which branch would you like to deploy? (master/main/feature) \${colors.reset}\`);
  
  // Checkout the selected branch
  if (!executeCommand(\`git checkout \${branch}\`, \`Checking out \${branch} branch\`)) {
    rl.close();
    return;
  }

  // Pull latest changes
  executeCommand(\`git pull origin \${branch}\`, \`Pulling latest changes from \${branch}\`);

  // Ask for confirmation
  const confirmation = await askQuestion(\`\${colors.gold}You are about to deploy the \${branch} branch to Wix. Continue? (y/n) \${colors.reset}\`);
  
  if (confirmation.toLowerCase() !== 'y') {
    console.log(\`\${colors.blue}Deployment cancelled.\${colors.reset}\`);
    rl.close();
    return;
  }

  // Build the project
  if (!executeCommand('npm run build', 'Building the project')) {
    rl.close();
    return;
  }

  // Deploy to Wix
  console.log(\`\${colors.magenta}Deploying to Wix...\${colors.reset}\`);
  
  // Check if this is a production deployment
  const isProduction = await askQuestion(\`\${colors.gold}Is this a production deployment? (y/n) \${colors.reset}\`);
  
  let deployCommand = 'wix site deploy';
  if (isProduction.toLowerCase() === 'y') {
    deployCommand = 'wix site deploy --production';
  }
  
  if (!executeCommand(deployCommand, \`Deploying \${branch} to Wix\`)) {
    rl.close();
    return;
  }

  console.log(\`\${colors.gold}
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║  \${colors.green}Deployment Complete\${colors.gold}                                      ║
║                                                              ║
║  \${colors.cyan}Branch:\${colors.gold} \${branch.padEnd(46)}║
║  \${colors.cyan}Environment:\${colors.gold} \${isProduction.toLowerCase() === 'y' ? 'Production'.padEnd(41) : 'Preview'.padEnd(41)}║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
\${colors.reset}\`);

  // Get the site URL
  try {
    const siteUrl = execSync('wix site url', { encoding: 'utf8' }).trim();
    console.log(\`\${colors.green}Your site is now available at: \${colors.cyan}\${siteUrl}\${colors.reset}\`);
  } catch (error) {
    console.log(\`\${colors.blue}To view your site, run 'wix site url'\${colors.reset}\`);
  }

  rl.close();
}

main().catch(error => {
  console.error(\`\${colors.red}Error: \${error.message}\${colors.reset}\`);
  rl.close();
});`

try {
  // Get the current directory
  const currentDir = process.cwd()
  console.log(`${colors.blue}Current directory: ${currentDir}${colors.reset}`)

  // Create the deploy-to-wix.js file
  const filePath = path.join(currentDir, "deploy-to-wix.js")
  fs.writeFileSync(filePath, scriptContent)

  console.log(`${colors.green}✓ Successfully created deploy-to-wix.js in ${currentDir}${colors.reset}`)
  console.log(`${colors.blue}You can now run the deployment script with:${colors.reset}`)
  console.log(`${colors.magenta}node deploy-to-wix.js${colors.reset}`)

  // Make the file executable on Unix-like systems
  try {
    fs.chmodSync(filePath, "755")
    console.log(`${colors.green}✓ Made the script executable${colors.reset}`)
  } catch (error) {
    // This might fail on Windows, which is fine
  }
} catch (error) {
  console.error(`${colors.red}Error creating script: ${error.message}${colors.reset}`)
}

