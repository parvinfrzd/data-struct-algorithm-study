// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// function maxSubarraySum(arr, num) {
//     if(num > arr.length) return null; 
//     maxAve = 0; 
//     currAve = 0; 

// } 

// maxSubarraySum([100, 200, 300, 400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5


let locations = [
    {id: 'YrImlRYAACQAqnBx', uid: 'newmarket', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrImlRYAACQAqnBx%22%29+%5D%5D'},
    {id: 'YrIydBYAACYAqqcu', uid: 'richmond-hill-beavercreek', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrIydBYAACYAqqcu%22%29+%5D%5D'},
    {id: 'YrIU3RYAACQAqiBK', uid: 'vaughan-colossus', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrIU3RYAACQAqiBK%22%29+%5D%5D'},
    {id: 'YrISBRYAACUAqhN-', uid: 'toronto-fairview-mall', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrISBRYAACUAqhN-%22%29+%5D%5D'},
    {id: 'YrJBchYAACcAqukM', uid: 'scarborough', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrJBchYAACcAqukM%22%29+%5D%5D'},
    {id: 'YqIKRBIAACQARlr3', uid: 'toronto-yorkdale-mall', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YqIKRBIAACQARlr3%22%29+%5D%5D'},
    {id: 'YrITfxYAACcAqhot', uid: 'pickering', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrITfxYAACcAqhot%22%29+%5D%5D'},
    {id: 'YrIMtRYAACUAqfsx', uid: 'etobicoke-dixon-road', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrIMtRYAACUAqfsx%22%29+%5D%5D'},
    {id: 'YrImEBYAACQAqm4P', uid: 'brampton-bramalea', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrImEBYAACQAqm4P%22%29+%5D%5D'},
    {id: 'YqIH4hIAACIARk_v', uid: 'toronto-downtown', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YqIH4hIAACIARk_v%22%29+%5D%5D'},
    {id: 'YrIW8hYAACUAqinE', uid: 'mississauga-courtney-park', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrIW8hYAACUAqinE%22%29+%5D%5D'},
    {id: 'YrIx0hYAACQAqqRL', uid: 'mississauga-square-one', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrIx0hYAACQAqqRL%22%29+%5D%5D'},
    {id: 'YrIvJhYAACcAqpgg', uid: 'barrie-georgian-mall', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrIvJhYAACcAqpgg%22%29+%5D%5D'},
    {id: 'YrIt0RYAACQAqpHt', uid: 'mississauga-argentia', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrIt0RYAACQAqpHt%22%29+%5D%5D'},
    {id: 'YrINYxYAACYAqf5D', uid: 'hamilton', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrINYxYAACYAqf5D%22%29+%5D%5D'},
    {id: 'YrITFBYAACQAqhhI', uid: 'kitchener', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrITFBYAACQAqhhI%22%29+%5D%5D'},
    {id: 'YrIXdRYAACQAqiwh', uid: 'london-downtown', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrIXdRYAACQAqiwh%22%29+%5D%5D'},
    {id: 'YrX8dBMAACQAGC9c', uid: 'kanata', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrX8dBMAACQAGC9c%22%29+%5D%5D'},
    {id: 'YrIm7hYAACYAqnH_', uid: 'ottawa-hunt-club', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrIm7hYAACYAqnH_%22%29+%5D%5D'},
    {id: 'YrIlaxYAACQAqmsS', uid: 'gloucester', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrIlaxYAACQAqmsS%22%29+%5D%5D'}, 
    {id: 'YrX_qxMAACYAGD3s', uid: 'orleans', url: null, type: 'location', href: 'https://moxies.cdn.prismic.io/api/v2/documents/sea…28document.id%2C+%22YrX_qxMAA'}
]