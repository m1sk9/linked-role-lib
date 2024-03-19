/**
 * Represents the metadata structure for an Discord Linked role connection.
 * See also: [Application Role Connection Metadata Structure - Discord Developer Documents](https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object)
 *
 * * `type` - The type of the metadata. [Available types](https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-type)
 * * `key` - The key of the metadata field (max 50 characters)
 * * `name` - The name of the metadata field (max 100 characters)
 * * `namelocalizations` - The localizations of the name of the metadata field. [Available locales](https://discord.com/developers/docs/reference#locales)
 * * `description` - The description of the metadata field (max 200 characters)
 * * `descriptionlocalizations` - The localizations of the description of the metadata field. [Available locales](https://discord.com/developers/docs/reference#locales)
 */
export type ApplicationRoleConnectionMetadataStructure = {
	type: number;
	key: string;
	name: string;
	namelocalizations?: string;
	description: string;
	descriptionlocalizations?: string;
};
