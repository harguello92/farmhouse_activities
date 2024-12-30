import type { APIRoute } from "astro";
import { ErrorMessages } from "src/api/ErrorMessages";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const name = data.get("name");
  const description = data.get("description");
  const day = data.get("day");
  const hour = data.get("hour");

  const errorMessagesHandler = new ErrorMessages();

  if (!name) {
    errorMessagesHandler.addError("name", "Name is required", "Name is required");
  }

  if (!description) {
    errorMessagesHandler.addError("description", "Description is required", "Description is required");
  }

  if (!day) {
    errorMessagesHandler.addError("day", "Day is required", "Day is required");
  }

  if (!hour) {
    errorMessagesHandler.addError("hour", "Hour is required", "Hour is required");
  }

  if (errorMessagesHandler.hasErrors()) {
    return new Response(
      JSON.stringify({
        errors: errorMessagesHandler.getAllErrorMessages()
      }),
      { status: 400 }
    );
  }

  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );
};
