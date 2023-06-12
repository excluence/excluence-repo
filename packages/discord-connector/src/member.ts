import { makeDiscordRequest } from "./discord-axios"
import { AddGuildMember, GuildMember } from "./types"



export async function addGuildMember(guildId: string, userId: string,
        args: AddGuildMember
    ): Promise<void> {
        return await makeDiscordRequest<void, AddGuildMember>({
            url: `guilds/${guildId}/members/${userId}`,
            method: 'put',
            data: args
        });
    }



export async function removeGuildMember(
    guildId: string,
    userId: string
): Promise<void> {
    return await makeDiscordRequest<void>({
        url: `guilds/${guildId}/members/${userId}`,
        method: 'delete'
    });
}

export async function getGuildMember(guildId: string, userId: string) {
    return await makeDiscordRequest<GuildMember>({
        url: `guilds/${guildId}/members/${userId}`,
        method: 'get'
    });
}