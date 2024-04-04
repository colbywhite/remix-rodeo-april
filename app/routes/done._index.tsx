import { useLoaderData } from "@remix-run/react";
import { ReactNode } from "react";
import supabase from "~/lib/supabase";
import { DateTime } from "luxon";

export async function loader() {
  // fetch from /orders route, not supabase
  // const response = await fetch('/orders');
  // console.log('response :>> ', response);

  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .eq("isDone", true);

  if (error) {
    console.log("Error loading journal entries", error);
  }
  return { orders: orders || [] };
  // return { orders: orders || [] };
}

export function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export default function ActiveRoute() {
  const { orders } = useLoaderData<typeof loader>();

  return (
    <>
      <div className="content">
        <h1 className="title is-3">Completed orders</h1>
      </div>
      <div className="fixed-grid has-4-cols">
        <div className="grid">
          {orders.map((order) => (
            <div className="box cell" key={order.id}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      className="rounded"
                      src={order.item.image}
                      alt="Yummy food"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    {order.item.name} <br />
                    <time dateTime={order.orderedAt}>
                      {DateTime.fromISO(order.orderedAt).toLocaleString(
                        DateTime.TIME_SIMPLE
                      )}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
