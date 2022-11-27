import { base64ToString } from "../../lib/conversions";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const response = base64ToString(req.body.str);
    return res.status(200).json(response);
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
