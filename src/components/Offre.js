import React from "react";
import { Card, Grid, IconButton } from "@material-ui/core";

export default function Offre() {
  return (
    <section
      id="features"
      style={{
        textAlign: "center",
        marginTop: "1.5rem!important",
        padding: 20
      }}
    >
      <h1
        style={{
          fontWeight: 500,
          fontSize: "2.18rem",
          lineHeight: 1.1
        }}
      >
        Soyez le changement
      </h1>
      <p>
        Notre suite de produits et services offre un véritable levier
        technologique, économique et culturel pour que nos clients puissent
        travailler à résoudre créativement des problèmes et partager des
        solutions aux différentes urgences, locales ou mondiales, auxquelles
        nous faisons face.
      </p>
      <Grid container justify="center" spacing={2}>
        <Grid item md={4}>
          <Card className="OfferCard" variant="outlined">
            <IconButton>
              <span
                style={{ fontSize: "36px" }}
                role="img"
                aria-label="tiers-lieux"
              >
                🏛️
              </span>
            </IconButton>
            <h4>Tiers Lieux</h4>
            <p>
              Un réseau de Tiers Lieux apprenants ouverts à tous: espaces de
              co-working, laboratoires, bibliothèques, ateliers, fermes...
            </p>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card className="OfferCard" variant="outlined">
            <IconButton>
              <span
                style={{ fontSize: "36px" }}
                role="img"
                aria-label="communauté"
              >
                ❤️
              </span>
            </IconButton>
            <h4>Communauté</h4>
            <p>
              Une communauté centrée sur le partage de connaissances et la
              résolution créative des problèmes du monde.
            </p>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card className="OfferCard" variant="outlined">
            <IconButton>
              <span
                style={{ fontSize: "36px" }}
                role="img"
                aria-label="économie"
              >
                💸
              </span>
            </IconButton>
            <h4>Economie</h4>
            <p>
              Un système économique vertueux, où la connaissance que l’on
              s’échange possède une véritable valeur économique.
            </p>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card className="OfferCard" variant="outlined">
            <IconButton>
              <span
                style={{ fontSize: "36px" }}
                role="img"
                aria-label="innovation"
              >
                💡
              </span>
            </IconButton>
            <h4>Innovation</h4>
            <p>
              Une pépinière de projets innovants sur lesquels travailler sans
              barrière à l’entrée, ouvrant la voie vers un autre rapport au
              travail.
            </p>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card className="OfferCard" variant="outlined">
            <IconButton>
              <span
                style={{ fontSize: "36px" }}
                role="img"
                aria-label="innovation"
              >
                🌐
              </span>
            </IconButton>
            <h4>Outils</h4>
            <p>
              Un écosystème numérique de nouvelle génération au design
              respectueux vis-à-vis de l'attention et des données de ses
              utilisateurs.
            </p>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
}
