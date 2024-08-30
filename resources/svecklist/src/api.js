const body = document.querySelector("body");
const portalUrl = body.dataset.portalUrl;

const patchRequest = new Request("", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: "",
});


export async function patch(path, data) {
  const url = `${portalUrl}/${path}`;

  const plonePatchRequest = new Request(patchRequest,{
    body: JSON.stringify(data),
  })

  try {
    const response = await fetch(plonePatchRequest);
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}


