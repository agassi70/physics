import {useCallback, useState, useEffect, useMemo, ChangeEvent} from "react";
import {
  Grid,
  Box,
  Paper,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles'

interface IPublication {
  title: string;
  authors: string;
  journal: string;
  issues?: string;
  pages?: string;
  year: number;
  link: string;
  pdf: string;
  bibtex?: string;
  comment?: string;
  abstract?: string;
}

interface IPublicsByYear {
  [year: string]: IPublication[]
}

const publications: IPublication[] = [
  {
    title: 'Advanced fiber in-coupling through nanoprinted axially-symmetric structures',
    authors: 'Oleh Yermakov*, Matthias Zeisberger, Henrik Schneidewind, Jisoo Kim, Andrey Bogdanov, Yuri Kivshar, and Markus A. Schmidt*',
    journal: 'Applied Physics Reviews',
    issues: '[Accepted]',
    link: 'https://doi.org/10.1109/JLT.2022.3226814',
    year: 2023,
    pdf: 'Mazanov_et_al_2022_On_anomalous_optical_beam_shifts_at_near_normal.pdf',
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: 'Vortex dynamics and structured darkness of Laguerre-Gaussian beams transmitted through q-plates under weak axial-asymmetric incidence',
    authors: 'Maxim Mazanov, and Oleh Yermakov*',
    journal: 'Journal of Lightwave Technology',
    year: 2022,
    issues: '[Early Access]',
    link: 'https://doi.org/10.1109/JLT.2022.3226814',
    pdf: 'Mazanov_et_al_2022_On_anomalous_optical_beam_shifts_at_near_normal.pdf',
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: 'Manipulation over surface waves in bilayer hyperbolic metasurfaces: topological transition and multidirectional canalization',
    authors: 'Aleksey Girich, Liubov Ivzhenko, Artem Hrinchenko, Sergey Tarapov, and Oleh Yermakov*',
    journal: 'IEEE Microwave and Wireless Components Letters',
    issues: '[Early Access]',
    year: 2022,
    link: 'https://doi.org/10.1109/LMWC.2022.3215016',
    pdf: 'Mazanov_et_al_2022_On_anomalous_optical_beam_shifts_at_near_normal.pdf',
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: 'On anomalous optical beam shifts at near-normal incidence',
    authors: 'M. Mazanov,  O. Yermakov*,  A. Bogdanov, and  A. Lavrinenko',
    journal: 'APL Photonics',
    pages: '7(10), 101301',
    year: 2022,
    link: 'https://doi.org/10.1063/5.0111203',
    pdf: 'Mazanov_et_al_2022_On_anomalous_optical_beam_shifts_at_near_normal.pdf',
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: 'Surface waves on self-complementary metasurfaces: all-frequency hyperbolicity, extreme canalization, and TE-TM polarization degeneracy',
    authors: 'Oleh Yermakov*, Vladimir Lenets, Andrey Sayanskiy, Juan Baena, Enrica Martini, Stanislav Glybovski*, and Stefano Maci',
    journal: 'Physical Review X',
    pages: '11(3), 031038',
    year: 2021,
    link: 'https://doi.org/10.1103/PhysRevX.11.031038',
    pdf: 'Mazanov_et_al_2022_On_anomalous_optical_beam_shifts_at_near_normal.pdf',
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: 'Nanostructure-empowered efficient coupling of light into optical fibers at extraordinarily large angles',
    authors: 'Oleh Yermakov*, Henrik Schneidewind, Uwe Hübner, Torsten Wieduwilt, Matthias Zeisberger, Andrey Bogdanov, Yuri Kivshar, and Markus A. Schmidt*',
    journal: 'ACS Photonics',
    pages: '7(10), 2834–2841',
    year: 2020,
    link: 'https://doi.org/10.1021/acsphotonics.0c01078',
    pdf: 'Mazanov_et_al_2022_On_anomalous_optical_beam_shifts_at_near_normal.pdf',
    comment: 'Front Cover of October 2019 issue, Top-30 optics research in 2020',
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: 'Photonic spin Hall effect: contribution of polarization mixing caused by anisotropys',
    authors: 'Maxim Mazanov, Oleh Yermakov*, Ilya Deriy, Osamu Takayama, Andrey Bogdanov, and Andrei V. Lavrinenko',
    journal: 'Quantum Reports',
    pages: '2(4), 489-500',
    year: 2020,
    link: 'https://doi.org/10.3390/quantum2040034',
    pdf: 'Mazanov_et_al_2022_On_anomalous_optical_beam_shifts_at_near_normal.pdf',
    comment: 'Special Issue, Top-10 most cited',
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: 'Broadband polarization degeneracy of guided waves in subwavelength structured ZnO pattern',
    authors: 'Oleh Y. Yermakov*, Andrey A. Bogdanov, and Andrei V. Lavrinenko',
    journal: 'IEEE Journal of Selected Topics in Quantum Electronics',
    pages: '25(3), 1-7 (2019)',
    year: 2019,
    link: 'https://doi.org/10.1109/JSTQE.2018.2886306',
    pdf: 'Mazanov_et_al_2022_On_anomalous_optical_beam_shifts_at_near_normal.pdf',
    comment: 'Invited article',
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: 'Experimental observation of hybrid TE-TM polarized surface waves supported by a hyperbolic metasurface',
    authors: 'Oleh Y. Yermakov*, Anna A. Hurshkainen, Dmitry A. Dobrykh, Polina V. Kapitanova, Ivan V. Iorsh, Stanislav B. Glybovski, and Andrey A. Bogdanov',
    journal: 'Physical Review B',
    pages: '98(19), 195404',
    year: 2018,
    link: 'https://doi.org/10.1103/PhysRevB.98.195404',
    pdf: 'Mazanov_et_al_2022_On_anomalous_optical_beam_shifts_at_near_normal.pdf',
    comment: 'Kaleidoscope PRB, November 2018',
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: 'Effective surface conductivity of optical hyperbolic metasurfaces: from far-field characterization to surface wave analysis',
    authors: 'Oleh Y. Yermakov*, Dmitry V. Permyakov, Filipp V. Porubaev, Pavel A. Dmitriev, Anton K. Samusev, Ivan V. Iorsh, Radu Malureanu, Andrei V. Lavrinenko, and Andrey A. Bogdanov',
    journal: 'Scientific Reports',
    pages: '8, 14135',
    year: 2018,
    link: 'https://doi.org/10.1038/s41598-018-32479-y',
    pdf: 'Mazanov_et_al_2022_On_anomalous_optical_beam_shifts_at_near_normal.pdf',
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: 'Experimental observation of Dyakonov plasmons in the mid-infrared',
    authors: 'O. Takayama, P. Dmitriev, E. Shkondin, O. Yermakov, M. Panah, K. Golenitskii, F. Jensen, A. Bogdanov*, and A. Lavrinenko',
    journal: 'Semiconductors',
    pages: '52(4), 442',
    year: 2018,
    link: 'https://doi.org/10.1134/S1063782618040279',
    pdf: 'Mazanov_et_al_2022_On_anomalous_optical_beam_shifts_at_near_normal.pdf',
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: 'Polarization-resolved characterization of plasmon waves supported by an anisotropic metasurface',
    authors: 'Anton Samusev*, Ivan Mukhin, Radu Malureanu, Osamu Takayama, Dmitry V. Permyakov, Ivan S. Sinev, Dmitry Baranov, Oleh Yermakov, Ivan V. Iorsh, Andrey A. Bogdanov, and Andrei V. Lavrinenko',
    journal: 'Optics Express',
    pages: '25(26), 32631',
    year: 2017,
    link: 'https://doi.org/10.1364/OE.25.032631',
    pdf: 'Mazanov_et_al_2022_On_anomalous_optical_beam_shifts_at_near_normal.pdf',
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: 'Spin control of light with hyperbolic metasurfaces',
    authors: 'Oleh Y. Yermakov*, Anton I. Ovcharenko, Andrey A. Bogdanov, Ivan V. Iorsh, Konstantin Y. Bliokh, and Yuri S. Kivshar',
    journal: 'Physical Review B',
    pages: '94(7), 075446',
    year: 2016,
    link: 'https://doi.org/10.1103/PhysRevB.94.075446',
    pdf: 'Mazanov_et_al_2022_On_anomalous_optical_beam_shifts_at_near_normal.pdf',
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: 'Hybrid waves localized at hyperbolic metasurface',
    authors: 'O. Y. Yermakov, A. I. Ovcharenko, M. Song, A. A. Bogdanov*, I. V. Iorsh*, and Yu. S. Kivshar',
    journal: 'Physical Review B',
    pages: '91(23), 235423',
    year: 2015,
    link: '91(23), 235423',
    pdf: 'Mazanov_et_al_2022_On_anomalous_optical_beam_shifts_at_near_normal.pdf',
    comment: 'Editors\' Suggestions',
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]

export default function Publications() {
  const classes = useStyles();

  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  // useEffect(() => {
  //   console.log(process.env)
  // }, [])
  const articles = useMemo(() => {
    return publications.reduce((acc: IPublicsByYear, publication: IPublication) => {
      if (!acc[publication.year]) {
        acc[publication.year] = [publication]
      } else {
        acc[publication.year] = [...acc[publication.year], publication]
      }
      return acc
    }, {})
  }, [publications])

  const handleExpand = useCallback((panel: string) => (event: ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded({...expanded, [panel]: isExpanded});
  }, [expanded]);

  const renderItem = useCallback((publication: IPublication, year: string, idx: number) => {
    const key = `${year}_${idx}`;
    return (
      <Box display={"flex"} py={0.25} width={"100%"} key={key}>
        <Accordion
          expanded={!!expanded[key]}
          onChange={handleExpand(key)}
          classes={{root: classes.accordRoot}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls={key}
            id={key}
          >
            <Box fontWeight={600}>
              <Typography variant={"h6"} color={"primary"}>
                {publication.journal}{': '}
              </Typography>
              <Box height={"6px"}/>
              <Typography variant={"h5"} color={"textPrimary"}>
                {publication.title}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Box py={0.5} fontWeight={600}>
                <Typography variant={"subtitle2"} color={"textSecondary"}>
                  {publication.authors}
                </Typography>
              </Box>
              <Box py={0.5} fontWeight={600}>
                <Typography variant={"subtitle2"} color={"textSecondary"}>
                  {publication.journal}{", "}{publication.pages || publication.issues}
                </Typography>
              </Box>
              {publication.comment && (
                <Box py={0.5}>
                  <Typography
                    variant={"subtitle2"}
                    color={"textSecondary"}
                    style={{fontWeight: 600, display: "inline"}}
                  >
                    {"Comment: "}
                  </Typography>
                  <Typography variant={"subtitle2"} color={"textSecondary"} style={{display: "inline"}}>
                    {publication.comment}
                  </Typography>
                </Box>
              )}
              {publication.abstract && (
                <Box py={0.5}>
                  <Typography
                    variant={"subtitle2"}
                    color={"textSecondary"}
                    style={{fontWeight: 600, display: "inline"}}
                  >
                    {"Abstract: "}
                  </Typography>
                  <Typography variant={"subtitle2"} color={"textSecondary"} style={{fontWeight: 500, display: "inline"}}>
                    {publication.abstract}
                  </Typography>
                </Box>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
        <Box pl={2.5}>
          <Box display={"flex"}>
            <Button variant="contained" size={"small"} color="primary" href={publication.link} target={"_blank"}>
              Link
            </Button>
            <Box width={"14px"}/>
            <Button variant="contained" size={"small"} color="primary" href={process.env.PUBLIC_URL + '/pdf/' + publication.pdf} target={"_blank"}>
              PDF
            </Button>
          </Box>
        </Box>
      </Box>
    )
  }, [expanded]);

  return (
    <Grid item xs={12}>
      <Box mt={2} pb={3}>
        {Object.keys(articles).sort((a, b) => +b - +a).map(year => (
          <Box key={year}>
            <Box py={2.5} fontWeight={600}>
              <Typography variant={"h6"} color={"textPrimary"} align={"center"}>
                {year}
              </Typography>
            </Box>
            {articles[year]
              .map((publication, idx) => renderItem(publication, year, idx))}
          </Box>
        ))}
      </Box>
    </Grid>
  );
}
