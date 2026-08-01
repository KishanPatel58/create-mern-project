#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const inquirer = require("inquirer");

async function copyFolder(source, destination) {
    if (await fs.pathExists(destination)) {
        console.log(`❌ ${path.basename(destination)} folder already exists.`);
        return;
    }

    await fs.copy(source, destination);
    console.log(`✅ ${path.basename(destination)} created successfully.`);
}

async function main() {
    try {
        const { projectType } = await inquirer.prompt([
            {
                type: "list",
                name: "projectType",
                message: "What do you want to create?",
                choices: [
                    {
                        name: "🚀 Create Full MERN Project",
                        value: "full",
                    },
                    {
                        name: "⚙️ Create Custom Project",
                        value: "custom",
                    },
                ],
            },
        ]);

        const serverSource = path.join(__dirname, "..", "template", "server");
        const clientSource = path.join(__dirname, "..", "template", "client");

        const serverDestination = path.join(process.cwd(), "server");
        const clientDestination = path.join(process.cwd(), "client");

        if (projectType === "full") {
            await copyFolder(serverSource, serverDestination);
            await copyFolder(clientSource, clientDestination);
        } else {
            const { selection } = await inquirer.prompt([
                {
                    type: "checkbox",
                    name: "selection",
                    message: "Select what you want to create:",
                    choices: [
                        {
                            name: "Server",
                            value: "server",
                        },
                        {
                            name: "Client",
                            value: "client",
                        },
                    ],
                    validate(answer) {
                        if (answer.length === 0) {
                            return "Please select at least one option.";
                        }
                        return true;
                    },
                },
            ]);

            if (selection.includes("server")) {
                await copyFolder(serverSource, serverDestination);
            }

            if (selection.includes("client")) {
                await copyFolder(clientSource, clientDestination);
            }
        }
        console.log("\n🎉 Done!");
    } catch (err) {
        console.error("❌", err.message);
    }
}

main();