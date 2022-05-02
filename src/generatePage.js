
const generateTeamPro = teamArr => {
  return`
    <div class="rounded m-3 min-w-[30%] shadow-2x1 overflow-hidden text-x1">
      ${teamArr
        .filter(employee => employee.getRole() === "Manager")
        .map((manager) => {
          return `
          <div class="text-white bg-green-600 p-3">
            <h2 class="text-lg">${manager.getName()}</h2>
            <h2>${manager.getRole()}</h2>
          </div>
          <div class="bg-gray-400 p-6">
            <ul class="">
              <li class="rounded border bg-white p-4">ID: ${manager.getId()}</li>
              <li class="rounded border bg-white p-4">Email: <a class="hover:underline text-blue-500" href="mailto${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class='rounded border bg-white p-4">Office Number: ${manager.Office()}</li>
            </ul>
          </div>

        `;
        })
      .join('')}
    </div>
        
  `;
};

const generateSite =
  `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="style.css">
      <title>My Team</title>
  </head>
  <body>
      <header>
          <h1 class="bg-red-500 text-center text-white text-4xl py-8">My Team</h1>
      </header>
      <main class="flex flex-wrap w-1/2 m-auto justify-center pt-6">
      ${generateTeamPro}
      </main>
</body>
</html>
  `;

module.exports = {generateSite}