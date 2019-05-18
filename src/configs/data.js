export default {
  matches: [
    {
      won: true,
      opponent: {
        name: "Jeremy Gruspe"
      },
      sets: [
        {
          games: {
            won: 6,
            lost: 1
          }
        },
        {
          games: {
            won: 6,
            lost: 2
          }
        }
      ]
    },
    {
      won: true,
      opponent: {
        name: "Bang Nguyen"
      },
      sets: [
        {
          games: {
            won: 7,
            lost: 6
          },
          tiebreaker: {
            won: 7,
            lost: 5
          }
        },
        {
          games: {
            won: 2,
            lost: 6
          }
        },
        {
          tiebreaker: {
            won: 11,
            lost: 9
          }
        }
      ]
    }
  ]
};
