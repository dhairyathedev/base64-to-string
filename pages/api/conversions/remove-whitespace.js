import {  removeWhiteSpace } from "../../../lib/conversions";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const response = removeWhiteSpace(req.body.str);
    return res.status(200).json(response);
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
