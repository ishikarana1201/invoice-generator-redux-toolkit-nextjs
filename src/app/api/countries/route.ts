// export async function GET(request: Request) {
//   return new Response("dropdown, Next.js!");
// }
import conuntries from "../../../../public/countries.json";

export async function GET(request: Request) {
  return new Response(JSON.stringify(conuntries), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
