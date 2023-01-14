import {useCallback, useMemo} from "react";
import {Grid, Box, Paper, Typography, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

interface IAward {
  name: string;
  year: string;
  remark?: string;
  link?: string;
}

interface IAwardsByYear {
  [year: string]: IAward[]
}

const awardsData: IAward[] = [
  {
    name: 'IEEE Photonics Society Graduate Student Scholarship',
    remark: '10 Phd students around the world',
    link: 'https://www.photonicssociety.org/awards/graduate-student-scholarship',
    year: '2020',
  },
  {
    name: 'SPIE Optics and Photonics Education Scholarship',
    year: '2019',
    remark: 'For his potential contributions to the field of optics, photonics or related field',
    link: 'https://spie.org/membership/student-services/scholarships/winners/2019-optics-and-photonics-education-scholarship-recipients',
  },
  {
    name: 'Individual grant "PhD Student" from the Foundation for the Advancement of Theoretical Physics and Mathematics "BASIS"',
    year: '2017',
    remark: 'Selects around 20 best Russian students in Theoretical Physics',
    link: 'https://basis-foundation.ru/general-competitions/theorphysics/research-grants/phd-student/winners',
  },
  {
    name: 'Best Student Paper Award, SPIE Optics+Optoelectronics 2017',
    year: '2017',
    remark: 'Conference "Metamaterials", Prague, Czech Republic',
  },
  {
    name: 'SPIE Travel Scholarship',
    year: '2017',
    remark: 'SPIE Travel Scholarship',
  },
  {
    name: 'First prize in the "Nano and Metamaterials Section", II International Young Scientists Forum on Applied Physics and Engineering',
    remark: 'Kharkiv, Ukraine',
    year: '2016',
  },
  {
    name: 'The best Master thesis of ITMO University',
    year: '2016',
    remark: 'The best Master thesis of ITMO University',
  },
  {
    name: 'The best presentation (2nd prize) at the young scientists’ section, International Winter School on Physics of Semiconductors',
    year: '2016',
    remark: 'Zelenogorsk, Russia',
  },
  {
    name: 'Award for students in Theoretical Physics from "Dynasty" Foundation',
    year: '2014',
    remark: 'Award for students in Theoretical Physics from "Dynasty" Foundation',
  }, {
    name: 'Scholarship of the International Research Centre for Nanophotonics and Metamaterials',
    year: '2014',
    remark: 'Scholarship of the International Research Centre for Nanophotonics and Metamaterials',
  },
  {
    name: 'Scholarship of the President of Ukraine',
    year: '2013',
    remark: 'Scholarship of the President of Ukraine',
  },
  {
    name: 'Scholarship of Kharkiv Mayor',
    year: '2011',
    remark: 'Scholarship of Kharkiv Mayor',
  },
]

export default function Awards() {

  const awards = useMemo(() => {
    return awardsData.reduce((acc: IAwardsByYear, award: IAward) => {
      if (!acc[award.year]) {
        acc[award.year] = [award]
      } else {
        acc[award.year] = [...acc[award.year], award]
      }
      return acc
    }, {})
  }, [awardsData])

  const renderItem = useCallback((item: IAward, idx: number) => {
    return (
      <Box key={item.name + idx} py={1}>
        <Typography variant={"subtitle2"} color={"textSecondary"} align={"center"}>
          {item.name}
        </Typography>
      </Box>
    )
  }, []);

  return (
    <Grid item xs={12}>
      <Box pb={3}>
        {Object.keys(awards).map(year => (
          <Box key={year}>
            <Box pt={2.5} pb={1} fontWeight={600}>
              <Typography variant={"h6"} color={"textPrimary"}>
                {year}
              </Typography>
            </Box>
            <Paper>
              {awards[year]
                .map((award: IAward, idx) => renderItem(award, idx))}
            </Paper>
          </Box>
        ))}
      </Box>
    </Grid>
  );
}
