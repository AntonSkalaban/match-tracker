interface Player {
  username: string;
  kills: number;
}

export interface Team {
  name: string;
  players: Player[];
  points: number;
  place: number;
  total_kills: number;
}

export type MatchStatus = "Scheduled" | "Ongoing" | "Finished";

export interface Match {
  time: string; // Date string in ISO format (e.g., "2025-03-10T14:34:09.496Z")
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
}

export interface MatchesResponse {
  ok: boolean;
  data: {
    matches: Match[];
  };
}
