import { Result } from "@mikuroxina/mini-fn";
import type { ApplicationRoleConnectionMetadataStructure } from "./types";

/**
 * Retrieves the role metadata for a Discord.
 *
 * ### Example
 * ```ts
 * import { getRoleMetadata } from '@m1sk9/linked-role-lib';
 *
 * const data = await getRoleMetadata("<ClientID>", "<TOKEN>");
 * ```
 *
 * @param discordClientID - The Discord client ID.
 * @param discordToken - The Discord token.
 * @returns A promise that resolves to a `Result` indicating the success or failure of the registration.
 */
export async function getRoleMetadata(
	discordClientID: string,
	discordToken: string,
): Promise<Result.Result<Error, ApplicationRoleConnectionMetadataStructure>> {
	const url = `https://discord.com/api/v10/applications/${discordClientID}/role-connections/metadata`;
	const response = await fetch(url, {
		method: "GET",
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
	return Result.ok(data);
}
