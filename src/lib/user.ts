import { User } from "@prisma/client";
import { db } from "./db";

export async function createUser(data: User) {
	try {
		const user = await db.user.create({ data });
		return { user };
	} catch (error) {
		return { error };
	}
}

export async function getUserById({
	id,
	clerkId,
}: {
	id?: string;
	clerkId?: string;
}) {
	try {
		if (!id && !clerkId) {
			throw new Error("id or clerkId is required");
		}

		const query = id ? { id } : { clerkId };

		const user = await db.user.findUnique({ where: query });
		return { user };
	} catch (error) {
		return { error };
	}
}

export async function UpdateUser(id: string, data: Partial<User>) {
	try {
		const user = await db.user.update({
			where: { id },
			data,
		});
		return { user };
	} catch (error) {
		return { error };
	}
}

export async function deleteUser(id: string) {
	try {
		const user = await db.user.delete({ where: { id } });
		return { user };
	} catch (error) {
		return { error };
	}
}

//create order

export async function createOrder(userId: string, amount: number) {
	return await db.order.create({
		data: {
			amount: amount,
			userId: userId,

		},
	});
}

export async function getOrderById(id: string) {
	return await db.order.findUnique({ where: { id } });
}

