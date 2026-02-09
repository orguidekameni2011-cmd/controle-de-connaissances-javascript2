/*
Exercice 1 — Médiane de deux tableaux triés

Énoncé :
On te donne deux tableaux de nombres triés nums1 et nums2.
Retourner la médiane de l'ensemble des valeurs des deux tableaux réunis.

Rappel :
- Total impair -> élément du milieu
- Total pair -> moyenne des 2 éléments du milieu
*/

function findMedianSortedArrays(nums1, nums2) {
  // TODO : écrire ton code ici
  const merged = [];
  let i = 0, j = 0;

  // Fusion des deux tableaux triés
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  // Ajouter les restes
  while (i < nums1.length) merged.push(nums1[i++]);
  while (j < nums2.length) merged.push(nums2[j++]);

  const n = merged.length;
  const mid = Math.floor(n / 2);

  return n % 2 === 0
    ? (merged[mid - 1] + merged[mid]) / 2
    : merged[mid];git add .
}
// Tests (au moins 3)
// --------------------
console.log(findMedianSortedArrays([1, 3], [2])); // attendu: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // attendu: 2.5
console.log(findMedianSortedArrays([], [1])); // attendu: 1 (cas limite)
