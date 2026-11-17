import React from "react";

function CredlyBadge({ badgeId, badgeName, imageName }) {
  return (
    <a
      className="certification-badge"
      href={`https://www.credly.com/badges/${badgeId}/public_url`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={`/images/${imageName}`} alt={badgeName} loading="lazy" />
    </a>
  );
}

export default CredlyBadge;
