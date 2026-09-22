import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addOrder } from "../services/orderApi";
import { OrderContext } from "../context/OrderContext";

const schema = z.object({
  userId: z.number().int().positive(),
  productId: z.number().int().positive(),
  quantity: z.number().min(1).int(),
});

export default function AddOrder() {
  const [success, setSuccess] = useState(false);
  const { setOrders } = useContext(OrderContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (data) => {
    const orderData = {
      userId: data.userId,
      products: [
        {
          id: data.productId,
          quantity: data.quantity,
        },
      ],
    };
    try {
      const result = await addOrder(orderData);
      setOrders((prevOrder) => [...prevOrder, result]);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
      reset();
    } catch (error) {
      console.log("Error adding order:", error);
    }
  };

  return (
    <div className="form-page">
      <div className="form-card">
      <div className="page-header">
        <h1>Add order</h1>
        <p>Create a new order</p>
      </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 mt-1">
            <label className="form-label">User ID:</label>
            <input
              {...register("userId", { valueAsNumber: true })}
              className="form-control"
              placeholder="User Id..."
              type="number"
            />
            {errors.userId && (
              <div className="text-danger error-message">{errors.userId.message}</div>
            )}
          </div>
          <div className="mb-3 mt-1">
            <label className="form-label">Product ID:</label>
            <input
              {...register("productId", { valueAsNumber: true })}
              className="form-control"
              placeholder="Product Id..."
              type="number"
            />
            {errors.productId && (
              <div className="text-danger error-message">{errors.productId.message}</div>
            )}
          </div>
          <div className="mb-3 mt-1">
            <label className="form-label">Quantity:</label>
            <input
              {...register("quantity", { valueAsNumber: true })}
              className="form-control"
              placeholder="Quantity..."
              type="number"
            />
            {errors.quantity && (
              <div className="text-danger error-message">{errors.quantity.message}</div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add"}
          </button>
          {success && (
            <div className="alert alert-success mt-4" role="alert">
              Order added successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
