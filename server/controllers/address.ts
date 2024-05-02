import { Request, Response } from "express";
import {
  addAddress,
  Address,
  deleteAddress,
  editAddress,
  getAddress,
} from "../services/userOperations/addressOperations";

export default {
  addAddress: async (req: Request, res: Response) => {
    try {
      const userUID: string = req.body?.userUID;
      const address: Address = req.body?.address;
      if (userUID && address) {
        await addAddress(userUID, address);
        res.sendStatus(200);
      } else {
        res.status(400).json({ message: "Invalid request body" });
      }
    } catch (error) {
      res.sendStatus(400);
    }
  },
  editAddress: async (req: Request, res: Response) => {
    try {
      const userUID: string = req.body?.userUID;
      const oldAddress: Address = req.body?.oldAddress;
      const newAddress: Address = req.body?.newAddress;
      if (userUID && oldAddress && newAddress) {
        await editAddress(userUID, oldAddress, newAddress);
        res.sendStatus(200);
      } else {
        res.status(400).json({ message: "Invalid request body" });
      }
    } catch (error) {
      res.sendStatus(400);
    }
  },
  deleteAddress: async (req: Request, res: Response) => {
    try {
      const userUID: string = req.body?.userUID;
      const address: Address = req.body?.address;
      if (userUID && address) {
        await deleteAddress(userUID, address);
        res.sendStatus(200);
      } else {
        res.status(400).json({ message: "Invalid request body" });
      }
    } catch (error) {
      res.sendStatus(400);
    }
  },
  getAddress: async (req: Request, res: Response) => {
    try {
      const userUID: string = req.body?.userUID;
      if (userUID) {
        const address = await getAddress(userUID);
        res.status(200).json({ data: address });
      } else {
        res.status(400).json({ message: "Invalid request body" });
      }
    } catch (error) {
      res.sendStatus(400);
    }
  },
};