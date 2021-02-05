(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(252)),i={id:"js-testing-workshop",title:"JavaScript Testing Workshop",sidebar_label:"JavaScript Testing Workshop"},s={unversionedId:"workshops/js-testing-workshop",id:"workshops/js-testing-workshop",isDocsHomePage:!1,title:"JavaScript Testing Workshop",description:"What will we learn today?",source:"@site/docs/workshops/js-testing-workshop.md",slug:"/workshops/js-testing-workshop",permalink:"/workshops/js-testing-workshop",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/workshops/js-testing-workshop.md",version:"current",sidebar_label:"JavaScript Testing Workshop"},l=[{value:"What will we learn today?",id:"what-will-we-learn-today",children:[]},{value:"Tracing Code",id:"tracing-code",children:[]},{value:"Testing our code",id:"testing-our-code",children:[]},{value:"Unit Testing",id:"unit-testing",children:[{value:"Unit testing frameworks",id:"unit-testing-frameworks",children:[]},{value:"Jest",id:"jest",children:[]}]},{value:"Test Driven Development",id:"test-driven-development",children:[]},{value:"More on Testing",id:"more-on-testing",children:[{value:"Test coverage",id:"test-coverage",children:[]},{value:"Refactoring",id:"refactoring",children:[]}]},{value:"Modules",id:"modules",children:[{value:"Creating modules, exporting code",id:"creating-modules-exporting-code",children:[]},{value:"Using modules, importing code",id:"using-modules-importing-code",children:[]},{value:"Separating code and tests",id:"separating-code-and-tests",children:[]}]},{value:"Tracing code resources",id:"tracing-code-resources",children:[]},{value:"Coursework",id:"coursework",children:[]},{value:"Research",id:"research",children:[]}],c={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-will-we-learn-today"},"What will we learn today?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#tracing-code"}),"Tracing Code")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#testing-our-code"}),"Testing")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#unit-testing"}),"Unit Testing")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#jest"}),"Unit Testing Frameworks - JEST")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#test-driven-development"}),"Test-driven Development")),Object(r.b)("li",{parentName:"ul"},"More on Testing",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#test-coverage"}),"Test coverage")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#refactoring"}),"Refactoring")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#modules"}),"Modules"))))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Fork and Clone the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/js-exercises-tdd"}),"js-exercises-tdd repo"))),Object(r.b)("h2",{id:"tracing-code"},"Tracing Code"),Object(r.b)("p",null,"What is Code? Computer code is a ",Object(r.b)("strong",{parentName:"p"},"set of rules or instructions"),". It is made up of words and numbers and when you put them in the ",Object(r.b)("strong",{parentName:"p"},"right order")," it will tell your computer what you want it to do."),Object(r.b)("p",null,"Let's trace these code samples together:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/js-exercises-tdd/blob/master/I.write-tests/01-greet-people/greet-people.js"}),"Sample 1"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/js-exercises-tdd/blob/master/I.write-tests/02-remove-vowels/remove-vowels.js"}),"Sample 2"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/js-exercises-tdd/blob/master/I.write-tests/03-remove-vowels-from-array/remove-vowels-in-array.js"}),"Sample 3")))),Object(r.b)("h2",{id:"testing-our-code"},"Testing our code"),Object(r.b)("p",null,"We have just traced the output of some code on paper, but how do ensure that the code actually does what it is supposed to do when we run it."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Discussion: How have we been testing our code so far? How do ensure it is ",Object(r.b)("em",{parentName:"p"},"correct"),'. What is "',Object(r.b)("em",{parentName:"p"},"correct"),'" anyhow?')),Object(r.b)("p",null,"In many organisations, there are full teams dedicated to ",Object(r.b)("strong",{parentName:"p"},"testing")," and ensuring that the code written behaves correctly, to report ",Object(r.b)("strong",{parentName:"p"},"bugs")," and make sure that they are fixed on time. In general, ",Object(r.b)("strong",{parentName:"p"},"Quality Assurance")," is a responsibility of everyone in a team starting from Project Manager, Scrum Masters, Developers and Testers."),Object(r.b)("p",null,"There are typically several levels of testing when working on a project:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Unit testing"),Object(r.b)("li",{parentName:"ul"},"Integration testing"),Object(r.b)("li",{parentName:"ul"},"Functional, End to End testing and User Acceptance Testing (UAT)")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackoverflow.com/a/4904533"}),"This answer from Stack Overflow")," has a good explanation of types of testing. The defintions for Functional, e2e and UAT are often mean different things in different teams, the responisibility for them also falls on different individuals depending on the team."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Unit testing")," though is always the responsibility of the Developer, and it is a very important skill for any professional developer to be able to write tests, and also write code that is testable."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Discussion: What is testable code?")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var result;\n\nfunction getMentorInfo(mentors, name) {\n  var greeting = \"Hello \";\n\n  result = mentors.find(function (person) {\n    return person.name === name;\n  });\n\n  var mentorTitle = \"Junior Developer\";\n\n  if (result.yearsOfExp > 10) {\n    mentorTitle = \"Senior Developer\";\n  } else if (result.yearsOfExp > 20) {\n    mentorTitle = \"Very Senior Developer\";\n  }\n\n  result.jobTitle = mentorTitle;\n  result.fullName = result.title + \" \" + result.name;\n\n  return result;\n}\n\n/*\n  var mentors = [\n      {\n          name: 'Irina',\n          title: 'Dr.',\n          yearsOfExperience: 10\n      }, {\n          name: 'Ashleigh',\n          title: 'Dame',\n          yearsOfExperience: 20\n      }, {\n          name: 'Etza',\n          title: 'Professor',\n          yearsOfExperience: 30\n      }\n  ];\n  \n  var result = getMentorInfo(mentors, 'Etza')\n  Trace the value of \"result\"\n*/\n")),Object(r.b)("h2",{id:"unit-testing"},"Unit Testing"),Object(r.b)("p",null,"Testing is a key skill for any software programmer. We need to make sure our\nsoftware is thoroughly tested, otherwise bad things happen. Testing makes sure\nour programs behave like we intend them to do - ",Object(r.b)("strong",{parentName:"p"},"if we don't test, we can cause\nsevere bugs"),". Bad software can make planes crash, companies bankrupt, and users\nof your software really frustrated."),Object(r.b)("p",null,"There are different levels on which we can test software, for example\nintegration testing, end-to-end testing, and unit testing. Today we will deal\nwith unit testing, which is probably the most universal testing discipline."),Object(r.b)("p",null,"A unit test is exactly that - it tests a ",Object(r.b)("em",{parentName:"p"},"unit"),' of code. "Unit" can mean\ndifferent things, but in JavaScript it usually refers to a single function.'),Object(r.b)("p",null,"Remember when we talked about functions? Functions take ",Object(r.b)("em",{parentName:"p"},"input")," (as arguments),\ndo something with it (in the function body), and return ",Object(r.b)("em",{parentName:"p"},"output")," (using the\n",Object(r.b)("inlineCode",{parentName:"p"},"return")," statement). Ideally, a function should always return the same output if\nthe same input is given. It makes it predictable and testable - and that's what\nwe want!"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"         |-----------------|\ninput => | doing something | => output\n         |-----------------|\n")),Object(r.b)("p",null,"So, when unit testing a function, we want to make sure that ",Object(r.b)("em",{parentName:"p"},"for a certain\ninput, we get the expected output"),". For this we need to make sure that the\noutput matches our expectations. In the simplest form that means we do an\nequality check:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"myFunction(input) === expectedOutput;\n")),Object(r.b)("p",null,"We can formalise this using another function that compares two values and\ncomplains when they do not match. Such a function is prepared in\n",Object(r.b)("inlineCode",{parentName:"p"},"unit-testing/equals.js"),"."),Object(r.b)("p",null,"We can use this function to simply compare to values:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'equals(1, 1); // This should pass\nequals(1, 2); // This should fail\nequals("Hello", "Hello"); // This should pass\n')),Object(r.b)("p",null,"Now we can use this ",Object(r.b)("inlineCode",{parentName:"p"},"equals()")," function to test our own code by comparing a\nfunction result to an expected value."),Object(r.b)("p",null,"Remember that one function can be used as an argument when a second function is called. In this instance, the function we are testing would represent our first function, and our ",Object(r.b)("inlineCode",{parentName:"p"},"equals()")," function would represent the second, like so..."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"equals(myNewFunction(arg1, arg2, etc), expectedOutput);\n")),Object(r.b)("p",null,"As you can see in this example, instead of using a number as the first argument to the ",Object(r.b)("inlineCode",{parentName:"p"},"equals()")," function, we have used a function instead; the one we wish to test."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Exercise: Write tests for the the exercises under ",Object(r.b)("inlineCode",{parentName:"p"},"I.write-tests"))),Object(r.b)("h3",{id:"unit-testing-frameworks"},"Unit testing frameworks"),Object(r.b)("p",null,"There are lots of other things you might want to test for than two things being\nequal. You might want to test if a number is smaller or greater than another, if\na function was called, if an error happened, or if one thing happened before\nanother thing, or how long a function call took to execute."),Object(r.b)("p",null,"We don't have to build all these things ourselves. Instead there are ",Object(r.b)("em",{parentName:"p"},"unit\ntesting frameworks")," that take all that work off our shoulders. All we need to do\nis provide the code and the tests."),Object(r.b)("h3",{id:"jest"},"Jest"),Object(r.b)("p",null,"The unit testing framework we are trying to day is called\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/jest/"}),"Jest"),". It's created by Facebook and useful\nfor all kinds of unit testing (especially testing React, which we will do in a\nlater lesson)."),Object(r.b)("p",null,"Look into your ",Object(r.b)("inlineCode",{parentName:"p"},"jest/")," folder. You will find a file there, ",Object(r.b)("inlineCode",{parentName:"p"},"sum.test.js"),". The\nsuffix ",Object(r.b)("inlineCode",{parentName:"p"},".test.js")," tells Jest that this file contains tests it should execute. To\nexecute the test, run the following command in your terminal:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm test\n")),Object(r.b)("p",null,"This command runs the test in ",Object(r.b)("inlineCode",{parentName:"p"},"sum.test.js"),", which tests the ",Object(r.b)("inlineCode",{parentName:"p"},"sum()")," function.\nYou can see the test output and the fact that the test passed."),Object(r.b)("p",null,"Tests cases in Jest have the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'test("test description", function () {\n  // Test instructions\n});\n')),Object(r.b)("p",null,"Jest provides a set of functions that you can use to write your actual tests.\nThey are created in a way that imitates natural language, for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"_Expect_ sum of 1 and 2 _to be_ 3\n")),Object(r.b)("p",null,"becomes"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"expect(sum(1, 2)).toBe(3);\n")),Object(r.b)("p",null,"You can add multiple test statements in the same test case (a test case is one\ncall of the ",Object(r.b)("inlineCode",{parentName:"p"},"test")," function, but you can also create multiple test cases in one\nfile. It is important that you give all your test cases meaningful descriptions."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"Exercise:")," Add another test case to ",Object(r.b)("inlineCode",{parentName:"p"},"sum.test.js"),". Is the sum of 10 and -10\nreally zero? Run the tests using Jest.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"Exercise:")," Take the ",Object(r.b)("inlineCode",{parentName:"p"},"findNeedle")," function you have tested previously, copy it\ninto the ",Object(r.b)("inlineCode",{parentName:"p"},"jest/")," folder and call it ",Object(r.b)("inlineCode",{parentName:"p"},"findNeedle.test.js"),". Then write a test to\nbe used with Jest, similar to ",Object(r.b)("inlineCode",{parentName:"p"},"sum.test.js"),". Make sure you cover multiple\ninputs and give all tests meaningful descriptions! Run the tests using Jest.")),Object(r.b)("h2",{id:"test-driven-development"},"Test Driven Development"),Object(r.b)("p",null,"Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only. This is opposed to software development that allows software to be added that is not proven to meet requirements. ","[Wikipedia]"),Object(r.b)("p",null,"When developing following TDD, you normally follow this sequence:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Add a test"),Object(r.b)("li",{parentName:"ol"},"Run all tests and see if the new test fails (Red)"),Object(r.b)("li",{parentName:"ol"},"Write the simplest code to make the test pass (Green)"),Object(r.b)("li",{parentName:"ol"},"Refactor"),Object(r.b)("li",{parentName:"ol"},"Repeat")),Object(r.b)("p",null,"Read more on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Test-driven_development"}),"Wikipedia article")," and the resources at the end."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.codecademy.com/articles/tdd-red-green-refactor"}),"Red Green Refactor")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'Exercise: Two mentors pair on a problem doing "ping pong" TDD. One writing the test, the other writing the implementation.')),Object(r.b)("h2",{id:"more-on-testing"},"More on Testing"),Object(r.b)("h3",{id:"test-coverage"},"Test coverage"),Object(r.b)("p",null,"Test coverage describes the extent to which a code base is tested. When Jest\nruns your tests, it generates a so-called ",Object(r.b)("em",{parentName:"p"},"coverage report"),". This report tells\nyou how many of your ",Object(r.b)("em",{parentName:"p"},"lines of code")," are covered by tests, how many functions,\nstatements, and branches."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A branch is one of multiple ways a code control flow can go. For example, if\nyou have an ",Object(r.b)("inlineCode",{parentName:"p"},"if() ... else ..."),', both the "if" and the "else" branch must be\ncovered by tests.')),Object(r.b)("p",null,"We want to keep our code coverage as high as possible. Jest allows us to\ngenerate a coverage report when we run the following command in the terminal:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm test -- --coverage\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"Exercise:")," Check your code coverage for the tests you wrote. Is any of the\nnumbers below 100%? If so, try and bring it up to 100%!")),Object(r.b)("h3",{id:"refactoring"},"Refactoring"),Object(r.b)("p",null,"There are times when we want to make our code better without changing any\nfunctionality, for example because we just learnt about a better way to solve a\ncertain problem (like, finding needles in haystacks). This is called\n",Object(r.b)("em",{parentName:"p"},"refactoring"),"."),Object(r.b)("p",null,"When previously ",Object(r.b)("strong",{parentName:"p"},"GREEN")," code - working code! - suddenly does not work anymore,\nwe call this a ",Object(r.b)("em",{parentName:"p"},"regression"),". Our existing tests can make sure that when we\nrefactor, the functionality of our code actually stays the same, and does not\nregress."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Exercise: Refactor some of the exercise we've written tests for.")),Object(r.b)("h2",{id:"modules"},"Modules"),Object(r.b)("p",null,"So far, all our programs have been in their own single files. But Node programs\ncan become really large, and having all our code in only one file will not be\nmaintainable."),Object(r.b)("p",null,"We can therefore split our code into so-called ",Object(r.b)("em",{parentName:"p"},"modules"),". A module is basically\na JavaScript file that makes its functionality available to other modules and\nprograms."),Object(r.b)("h3",{id:"creating-modules-exporting-code"},"Creating modules, exporting code"),Object(r.b)("p",null,"It is really simple to take existing JavaScript code and turn it into a module\nby exporting its functionality:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function printName(name) {\n  console.log("My name is " + name);\n}\n\nmodule.exports = printName;\n')),Object(r.b)("p",null,"The key here is the line containing ",Object(r.b)("inlineCode",{parentName:"p"},"module.exports"),". As you see, this is an\nassignment, and whatever is assigned to ",Object(r.b)("inlineCode",{parentName:"p"},"module.exports")," will be made available\nto other modules and program when this file is imported."),Object(r.b)("h3",{id:"using-modules-importing-code"},"Using modules, importing code"),Object(r.b)("p",null,"But how do we make use of another module in our program? We need to ",Object(r.b)("em",{parentName:"p"},"import")," it,\nand this is done using a function called ",Object(r.b)("inlineCode",{parentName:"p"},"require()"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"There are different module formats for JavaScript. The one we are using here,\nwhich is natively supported by Node, is called ",Object(r.b)("strong",{parentName:"p"},"CommonJS"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'var printName = require("./printName.js");\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The string passed to the ",Object(r.b)("inlineCode",{parentName:"p"},"require()")," function is a ",Object(r.b)("em",{parentName:"p"},"path")," to the file you are\nimporting. ",Object(r.b)("inlineCode",{parentName:"p"},"./"),' signifies the current directory, so the above command will\nimport a file called "printName.js" that is in the same directory as our\nprogram.')),Object(r.b)("p",null,"Assuming our program is in the same folder as ",Object(r.b)("inlineCode",{parentName:"p"},"printName.js"),", we can use the\nabove code to import the functionality provided by that module and store it in\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"printName")," variable."),Object(r.b)("p",null,"We can then continue to use the ",Object(r.b)("inlineCode",{parentName:"p"},"printName")," function as if it we defined it in\nour own program!"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"var printName = require('./printName.js');\n\nprintName();\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Modules can not only export functions, but all variable types you already\nlearned about. Most commonly, they export a function or an object containing\nmultiple functions.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"Together:")," Edit the file ",Object(r.b)("inlineCode",{parentName:"p"},"modules/main.js")," and follow the instructions.")),Object(r.b)("h3",{id:"separating-code-and-tests"},"Separating code and tests"),Object(r.b)("p",null,"Exporting and importing modules is really useful for testing, too."),Object(r.b)("p",null,"As a rule of thumb, we never want to mix our actual code with our tests. It is\ntherefore common to put them in separate files. We are going to call the file\ncontaining the tests after the file containing the code to be tested, just\nappending ",Object(r.b)("inlineCode",{parentName:"p"},".test")," at the end of the filename. Like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'main.js               # Our main program\nmain.test.js          # Tests for our main program\nsomeOtherCode.js      # A module called "someOtherCode"\nsomeOtherCode.test.js # Tests for the "someOtherCode" module\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'The naming is really up to convention - you can even put your tests in a\ndifferent folder! However, for Jest it is important to call test files\n"',"*",'.test.js".')),Object(r.b)("h1",{id:"glossary"},"Glossary"),Object(r.b)("p",null,"You should know these terms by the end of this class: Testing, Quality Assurance, Unit Tests, Integration Tests, Refactoring, Regression Tests .. any more?"),Object(r.b)("h1",{id:"resources"},"Resources"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics"}),"MDN Objects basics")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS"}),"MDN OOP in JS")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Test-driven_development"}),"Test-driven development")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://facebook.github.io/jest/"}),"Jest")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/modules.html"}),"Modules")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://medium.com/software-developer/debugging-facebooks-jest-for-react-in-visual-studio-code-9059223e1e71"}),"Setup VS Code for Debugging"))),Object(r.b)("h2",{id:"tracing-code-resources"},"Tracing code resources"),Object(r.b)("p",null,"Check out these videos. They contain code that is not JavaScript being traced on paper."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=TZss5ukwN8s"}),"Hand Tracing - Intro to Java Programming")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=tJGrie7k97c"}),"Tracing code by hand")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=SEtNBShckCg"}),"Tracing a flowchart")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=niwBxBUzDu4"}),"Java Tracing Arrays Worksheet 1")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=5mxT9x5rgCg"}),"Nested loops")),Object(r.b)("h2",{id:"coursework"},"Coursework"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Finish the Katas and exercises in the project we've worked on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/js-exercises-tdd"}),"today"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Follow this tutorial about ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.google.com/web/tools/chrome-devtools/javascript/"}),"Debugging with Chrome"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Register yourself on the Marc Littlemore's free ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.marclittlemore.com/courses/javascript-testing-beginners-course/?signup=cyf-course"}),"JavaScript Testing for Beginners")," course and work your way through the 7 lessons, which are delivered via a daily email. The course uses a Mocha/Chai framework, which is in common use within the web development industry. This will give you more TDD practice using a different approach to Jest, as well as more exposure to ES2015/ES6 JavaScript."))),Object(r.b)("h2",{id:"research"},"Research"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Research other module formats than CommonJS. What is AMD? What are ES6\nmodules and how do their differ from CommonJS?"),Object(r.b)("li",{parentName:"ol"},"What are other test frameworks for JavaScript?"),Object(r.b)("li",{parentName:"ol"},"More parts of the Jest (Jasmine) DSL than just ",Object(r.b)("inlineCode",{parentName:"li"},".toBe()"))))}b.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return n?o.a.createElement(d,s(s({ref:t},c),{},{components:n})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);