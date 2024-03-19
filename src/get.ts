import { Result } from "@mikuroxina/mini-fn";
import type { ApplicationRoleConnectionMetadataStructure } from "./types";

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
