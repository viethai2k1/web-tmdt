// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const responseMangSP = await fetch(
    `https://panofrontendstore.myshopify.com/admin/api/2023-07/products.json`,
    {
      headers: {
        "X-Shopify-Access-Token": "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",
      },
    }
  );

  const responseMangSPJson = await responseMangSP.json();
  res.status(200).json(responseMangSPJson);
}
