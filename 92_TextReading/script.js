const textElement = document.getElementById("text");
const speedElement = document.getElementById("speed");
const text = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dignissimos suscipit eos quaerat est. Eum necessitatibus itaque odio? Possimus, qui! Ipsam quos consectetur numquam dolores obcaecati vero earum beatae illo reprehenderit natus dicta, ab a quasi neque fuga eaque quas. Deserunt debitis voluptates labore, dolorem neque autem eius libero illum optio eaque aliquid dolores odit nihil atque! Odit distinctio aspernatur quos laborum molestiae ullam id ipsam sed blanditiis neque consequuntur rerum labore quisquam impedit atque delectus adipisci rem at, deserunt, voluptatibus nihil eaque in! Adipisci fuga quia sint molestias eos neque eligendi sequi ducimus. Voluptatum neque ad accusamus sapiente excepturi dolore. Commodi perspiciatis consequuntur dolor possimus sunt suscipit neque voluptatibus quas, asperiores ut? Explicabo quibusdam id incidunt quisquam aliquid? Aspernatur fugiat molestias necessitatibus natus voluptas alias nesciunt illum accusantium est pariatur non cum eligendi dolorum tenetur laborum, modi repellat ducimus! Corporis ipsum optio numquam unde cupiditate voluptatum magnam alias! Minus illum tenetur quae facilis dolorum esse tempora voluptate, atque dolores aperiam repudiandae consectetur incidunt harum earum id est, odit consequatur. Fuga iste assumenda atque maiores voluptas corporis esse nostrum tempore ea dolore. Sapiente asperiores fugiat eaque voluptate ducimus! Ullam odit nam aut doloribus consequuntur. Cum quas ratione placeat obcaecati dolorem! Voluptatum facere voluptates debitis, sequi minima, consequuntur nisi rem nemo et asperiores fugit, repellendus sed quae repellat dolores. Quas ipsum, culpa atque architecto deleniti unde cum nulla voluptatem repellat ipsa incidunt, quibusdam fugiat minus repellendus expedita amet doloremque nihil perferendis aliquam obcaecati perspiciatis consequatur omnis dolor. Illo dicta itaque voluptatum quas, cumque ipsam quia labore deleniti aperiam, a sequi architecto, eius veniam assumenda! Ipsam mollitia consectetur necessitatibus, ratione assumenda commodi. Sit corrupti qui amet odit voluptatum alias aperiam voluptatem laboriosam itaque rerum obcaecati eaque perspiciatis at, sint dolorem, nesciunt neque voluptas minus incidunt asperiores, nulla harum corporis. Reiciendis, sed alias.";
let index = 1;
let speed = 600 / speedElement.value;

const writeText = () => {
  textElement.innerText = text.slice(0, index);
  index++;
  if (index > text.length) index = 1;
  setTimeout(writeText, speed);
};

writeText();

speedElement.addEventListener("input", (e) => (speed = 600 / e.target.value));
