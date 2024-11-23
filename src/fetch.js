async function getByLocation(address) {
  let url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
    address +
    "?key=657BNQHER95TL8PD9BRM6JJY9";

  try {
    let promise = await fetch(url, {
      mode: "cors",
    });

    let response = await promise.json();

    return response;
  } catch (error) {
    return error;
  }
}

export { getByLocation };
