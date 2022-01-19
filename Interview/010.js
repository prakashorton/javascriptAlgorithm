var temp =[{ id: 1, name: 'prakash' }, { id: 1, name: 'prakash1' }, { id: 2, name: 'prakash2' }]
// Output
// {1:[],2:[]}

temp.reduce((ac, cu) => {
    if(ac[cu.id])
        ac[cu.id] = [...ac[cu.id], cu];
     else 
        ac[cu.id] = [cu];
    return { ...ac  };
}, {});

temp.reduce((ac, cu) => ({}), {});
