/* =========================================
   WORKWISE AI
   APPLICATION JAVASCRIPT
========================================= */

"use strict";


/* =========================================
   HELPER FUNCTIONS
========================================= */

function showLoading(id) {
    const element = document.getElementById(id);

    if (element) {
        element.classList.add("show");
    }
}


function hideLoading(id) {
    const element = document.getElementById(id);

    if (element) {
        element.classList.remove("show");
    }
}


function isEmpty(value) {
    return !value || value.trim() === "";
}


function displayError(elementId, message) {
    const element = document.getElementById(elementId);

    if (element) {
        element.textContent = message;
    }
}


function simulateAI(callback, loadingId) {

    showLoading(loadingId);

    setTimeout(() => {

        hideLoading(loadingId);

        callback();

    }, 900);

}


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");

if (menuButton && sidebar) {

    menuButton.addEventListener("click", () => {

        sidebar.classList.toggle("open");

    });

}


document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 1000) {

            sidebar.classList.remove("open");

        }

    });

});


/* =========================================
   SMART EMAIL GENERATOR
========================================= */

const generateEmailButton =
    document.getElementById("generateEmail");

const resetEmailButton =
    document.getElementById("resetEmail");

if (generateEmailButton) {

    generateEmailButton.addEventListener("click", () => {

        const purpose =
            document.getElementById("emailPurpose").value.trim();

        const tone =
            document.getElementById("emailTone").value;

        if (isEmpty(purpose)) {

            displayError(
                "emailOutput",
                "Please enter the purpose of your email before generating a response."
            );

            return;
        }


        simulateAI(() => {

            let opening = "Dear Manager,";

            if (tone === "Friendly") {
                opening = "Hi Manager,";
            }

            if (tone === "Formal") {
                opening = "Dear Sir/Madam,";
            }

            if (tone === "Concise") {
                opening = "Dear Manager,";
            }


            const email = `Subject: Request Regarding ${purpose}

${opening}

I am writing to discuss the following matter:

${purpose}

I would appreciate your consideration of this request. Please let me know if you require any additional information from me.

Thank you for your time and consideration.

Kind regards,
Nyeleti`;


            displayError("emailOutput", email);

        }, "emailLoading");

    });

}


if (resetEmailButton) {

    resetEmailButton.addEventListener("click", () => {

        document.getElementById("emailPurpose").value = "";

        document.getElementById("emailTone").value =
            "Professional";

        displayError(
            "emailOutput",
            "Your generated email will appear here."
        );

    });

}


/* =========================================
   MEETING NOTES SUMMARIZER
========================================= */

const generateMeetingButton =
    document.getElementById("generateMeeting");

const resetMeetingButton =
    document.getElementById("resetMeeting");

if (generateMeetingButton) {

    generateMeetingButton.addEventListener("click", () => {

        const notes =
            document.getElementById("meetingNotes").value.trim();

        if (isEmpty(notes)) {

            displayError(
                "meetingOutput",
                "Please paste your meeting notes before generating a summary."
            );

            return;
        }


        simulateAI(() => {

            const summary = `
MEETING SUMMARY

The meeting discussed the main workplace priorities, current tasks and the next steps required to move the work forward.

KEY DISCUSSION POINTS
• Review of current project progress
• Identification of outstanding tasks
• Discussion of upcoming deadlines
• Allocation of responsibilities
• Need for regular progress updates

DECISIONS MADE
• Outstanding tasks should be prioritised.
• Team members should communicate progress regularly.
• Important deadlines should be monitored.

ACTION ITEMS
• Review outstanding work.
• Complete assigned tasks.
• Provide progress updates.
• Follow up on unresolved issues.

RESPONSIBLE PERSONS
Responsible persons should be confirmed from the original meeting notes.

DEADLINES
Any deadlines should be confirmed against the original meeting notes.

SOURCE NOTES
${notes}
`;

            displayError("meetingOutput", summary);

        }, "meetingLoading");

    });

}


if (resetMeetingButton) {

    resetMeetingButton.addEventListener("click", () => {

        document.getElementById("meetingNotes").value = "";

        displayError(
            "meetingOutput",
            "Your meeting summary will appear here."
        );

    });

}


/* =========================================
   AI TASK PLANNER
========================================= */

const generateTasksButton =
    document.getElementById("generateTasks");

const resetTasksButton =
    document.getElementById("resetTasks");

if (generateTasksButton) {

    generateTasksButton.addEventListener("click", () => {

        const tasks =
            document.getElementById("taskInput").value.trim();

        if (isEmpty(tasks)) {

            displayError(
                "taskOutput",
                "Please enter a goal or list of tasks before creating a plan."
            );

            return;
        }


        simulateAI(() => {

            const plan = `
AI TASK PLAN

URGENT TASKS
1. Identify tasks with immediate deadlines.
2. Complete work that blocks other activities.
3. Communicate any urgent issues to the relevant person.

IMPORTANT TASKS
4. Complete the main project activities.
5. Review the quality of completed work.
6. Prepare required documents or presentations.

LOWER-PRIORITY TASKS
7. Organise supporting information.
8. Complete administrative tasks.
9. Review future improvements.

RECOMMENDED ORDER

Priority 1 — Urgent and deadline-sensitive work
Priority 2 — Important project activities
Priority 3 — Supporting tasks
Priority 4 — Administrative and improvement tasks

SUGGESTED DEADLINES

Urgent tasks: Within 1–2 working days
Important tasks: Within 3–5 working days
Lower-priority tasks: Within 1–2 weeks

USER GOAL / TASKS

${tasks}

NOTE:
The suggested priorities and deadlines should be reviewed and adjusted
according to actual workplace requirements.
`;

            displayError("taskOutput", plan);

        }, "taskLoading");

    });

}


if (resetTasksButton) {

    resetTasksButton.addEventListener("click", () => {

        document.getElementById("taskInput").value = "";

        displayError(
            "taskOutput",
            "Your task plan will appear here."
        );

    });

}


/* =========================================
   AI RESEARCH ASSISTANT
========================================= */

const generateResearchButton =
    document.getElementById("generateResearch");

const resetResearchButton =
    document.getElementById("resetResearch");

if (generateResearchButton) {

    generateResearchButton.addEventListener("click", () => {

        const topic =
            document.getElementById("researchTopic").value.trim();

        if (isEmpty(topic)) {

            displayError(
                "researchOutput",
                "Please enter a research topic or workplace question."
            );

            return;
        }


        simulateAI(() => {

            const research = `
RESEARCH OVERVIEW

The research should investigate the topic below and consider its relevance,
benefits, challenges and practical workplace applications.

TOPIC

${topic}

KEY POINTS TO INVESTIGATE

• Definition and background of the topic
• Current workplace applications
• Potential benefits
• Challenges and limitations
• Ethical considerations
• Impact on employees and organisations
• Future developments

SUGGESTED RESEARCH QUESTIONS

1. What is the main purpose of this technology or approach?
2. How is it currently used in the workplace?
3. What benefits can organisations gain?
4. What risks or challenges should organisations consider?
5. How can responsible use be encouraged?

USEFUL SEARCH TERMS

• ${topic} workplace
• ${topic} productivity
• ${topic} benefits
• ${topic} challenges
• ${topic} responsible use
• ${topic} workplace examples

RECOMMENDED PRESENTATION STRUCTURE

1. Introduction
2. Background
3. Key findings
4. Benefits
5. Challenges
6. Responsible use
7. Recommendations
8. Conclusion
9. References

IMPORTANT:
AI-generated information must be verified using reliable sources before
being presented or used as factual information.
`;

            displayError("researchOutput", research);

        }, "researchLoading");

    });

}


if (resetResearchButton) {

    resetResearchButton.addEventListener("click", () => {

        document.getElementById("researchTopic").value = "";

        displayError(
            "researchOutput",
            "Your research guide will appear here."
        );

    });

}


/* =========================================
   COPY TO CLIPBOARD
========================================= */

document.querySelectorAll(".copy-button").forEach(button => {

    button.addEventListener("click", async () => {

        const targetId =
            button.getAttribute("data-target");

        const target =
            document.getElementById(targetId);

        if (!target) {
            return;
        }

        const text =
            target.innerText.trim();

        if (isEmpty(text)) {

            button.textContent = "Nothing to copy";

            setTimeout(() => {
                button.textContent = "Copy";
            }, 1500);

            return;
        }


        try {

            await navigator.clipboard.writeText(text);

            button.textContent = "Copied!";

            setTimeout(() => {

                button.textContent = "Copy";

            }, 1500);

        } catch (error) {

            button.textContent = "Copy failed";

            setTimeout(() => {

                button.textContent = "Copy";

            }, 1500);

        }

    });

});


/* =========================================
   WORKPLACE AI CHATBOT
========================================= */

const chatInput =
    document.getElementById("chatInput");

const sendChat =
    document.getElementById("sendChat");

const chatWindow =
    document.getElementById("chatWindow");


function addChatMessage(message, type) {

    const messageElement =
        document.createElement("div");

    messageElement.className =
        type === "user"
            ? "user-message"
            : "bot-message";


    if (type === "bot") {

        messageElement.innerHTML = `
            <strong>WorkWise AI</strong>
            <p>${message}</p>
        `;

    } else {

        messageElement.innerHTML = `
            <p>${message}</p>
        `;

    }


    chatWindow.appendChild(messageElement);

    chatWindow.scrollTop =
        chatWindow.scrollHeight;

}


function generateChatResponse(question) {

    const lowerQuestion =
        question.toLowerCase();


    if (
        lowerQuestion.includes("email") ||
        lowerQuestion.includes("write")
    ) {

        return "I can help you structure a professional workplace email. Start with the purpose, identify the recipient, choose an appropriate tone and clearly explain what action you are requesting.";

    }


    if (
        lowerQuestion.includes("time") ||
        lowerQuestion.includes("productivity")
    ) {

        return "A useful productivity approach is to prioritise tasks by urgency and importance, break large tasks into smaller steps and set realistic deadlines.";

    }


    if (
        lowerQuestion.includes("meeting")
    ) {

        return "For an effective meeting, define an agenda, record important discussion points, document decisions, assign action items and record deadlines where applicable.";

    }


    if (
        lowerQuestion.includes("research")
    ) {

        return "For workplace research, begin with a clear question, identify reliable sources, compare information from multiple sources and verify important facts before presenting your findings.";

    }


    if (
        lowerQuestion.includes("plan") ||
        lowerQuestion.includes("task")
    ) {

        return "Try separating your tasks into urgent, important and lower-priority categories. Complete deadline-sensitive work first, then focus on important activities and finally supporting tasks.";

    }


    return "I can help you with workplace communication, planning, productivity, research, brainstorming and general office tasks. For important decisions, always review AI suggestions using your own professional judgement.";

}


function sendChatMessage() {

    const question =
        chatInput.value.trim();


    if (isEmpty(question)) {

        chatInput.focus();

        return;
    }


    addChatMessage(question, "user");

    chatInput.value = "";


    const typingMessage =
        document.createElement("div");

    typingMessage.className = "bot-message";

    typingMessage.innerHTML = `
        <strong>WorkWise AI</strong>
        <p>Thinking...</p>
    `;

    chatWindow.appendChild(typingMessage);

    chatWindow.scrollTop =
        chatWindow.scrollHeight;


    setTimeout(() => {

        typingMessage.remove();

        const response =
            generateChatResponse(question);

        addChatMessage(response, "bot");

    }, 700);

}


if (sendChat) {

    sendChat.addEventListener(
        "click",
        sendChatMessage
    );

}


if (chatInput) {

    chatInput.addEventListener("keydown", event => {

        if (event.key === "Enter") {

            event.preventDefault();

            sendChatMessage();

        }

    });

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id], article[id]");

const navigationLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   STARTUP MESSAGE
========================================= */

console.log(
    "WorkWise AI loaded successfully."
);
