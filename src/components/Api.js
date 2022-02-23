import React, { useEffect, useState } from "react";
import ApiItems from "./ApiItems";
import Spinner from "./Spinner";

const Api = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMoreData();
    setLoading(true);
  }, []);

  const fetchMoreData = async () => {
    const url = "https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba";
    let data = await fetch(url);
    let parsedData = await data.json();
    setClients(clients.concat(parsedData.clients));
    setLoading(false);
  };

  return (
    <div>
       {loading && <Spinner />}
      <div className="container">
        <div className="row">
          {clients?.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <ApiItems
                  name={element.name ? element.name : "No data found"}
                  company={element.company ? element.company : "No data found"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Api;
