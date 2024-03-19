import { Result } from "@mikuroxina/mini-fn";
import type { ApplicationRoleConnectionMetadataStructure } from "./types";

/**
 * Retrieves the role metadata for a Discord.
 *
 * @param registerBody - The metadata structure to register.
 * @param discordClientID - The client ID of the Discord application.
 * @param discordToken - The Discord bot token.
 * @returns A promise that resolves to a Result object containing either the registered metadata or an error.
 */
export async function getRoleMetadata(
	registerBody: ApplicationRoleConnectionMetadataStructure,
	discordClientID: string,
	discordToken: string,
): Promise<Result.Result<Error, ApplicationRoleConnectionMetadataStructure>> {
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
	return Result.ok(data);
}
