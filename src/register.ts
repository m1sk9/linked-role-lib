import { Result } from "@mikuroxina/mini-fn";
import type { ApplicationRoleConnectionMetadataStructure } from "./types";

/**
 * Registers role metadata for a Discord.
 *
 * ### Example
 * ```ts
 * import { registerRoleMetadata, type ApplicationRoleConnectionMetadataStructure } from '@m1sk9/linked-role-lib';
 *
 * const roledata: ApplicationRoleConnectionMetadataStructure[] = [
 * {
 *   type: 7
 *   name: "role1",
 *   description: "Role 1",
 *   key: "role1",
 * },
 * {
 *   type: 7
 *   name: "role1",
 *   description: "Role 1",
 *   key: "role1",
 * }
 * ]
 *
 * await registerRoleMetadata(roledata, "<ClientID>", "<TOKEN>");
 * ```
 *
 * @param registerBody - The role metadata to register.
 * @param discordClientID - The Discord client ID.
 * @param discordToken - The Discord token.
 * @returns A promise that resolves to a `Result` indicating the success or failure of the registration.
 */
export async function registerRoleMetadata(
	registerBody: ApplicationRoleConnectionMetadataStructure[],
	discordClientID: string,
	discordToken: string,
): Promise<Result.Result<Error, void>> {
	const url = `https://discord.com/api/v10/applications/${discordClientID}/role-connections/metadata`;
	const response = await fetch(url, {
		method: "PUT",
		body: JSON.stringify(registerBody),
		headers: {
			Authorization: `Bot ${discordToken}`,
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		return Result.err(
			new Error(
				`Failed to register role metadata: ${response.status} ${response.statusText}`,
			),
		);
	}

	const data =
		(await response.json()) as ApplicationRoleConnectionMetadataStructure;
	console.log(data);

	return Result.ok(undefined);
}
