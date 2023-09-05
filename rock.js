function rock()
{
    const rand=Math.random();
    let computer='';
    if(rand>=0 && rand<1/3)
    {
        computer='rock';
    }
    else if(rand>=1/3 && rand<2/3)
    {
        computer='paper';
    }
    else if(rand>=2/3 && rand<1)
    {
        computer='scissor';
    }
    let result='';
    if(computer==='rock')
    {
        result='Tie';
    }
    else if(computer==='paper')
    {
        result='You lose';
    }
    else if(computer==='scissor')
    {
        result='You Win';
    }
    alert(`your move is rock, computer move is ${computer} the result is ${result}`);

}
function paper()
{
    const rand=Math.random();
    let computer='';
    if(rand>=0 && rand<1/3)
    {
        computer='rock';
    }
    else if(rand>=1/3 && rand<2/3)
    {
        computer='paper';
    }
    else if(rand>=2/3 && rand<1)
    {
        computer='scissor';
    }
    let result='';
    if(computer==='rock')
    {
        result='You win';
    }
    else if(computer==='paper')
    {
        result='Tie';
    }
    else if(computer==='scissor')
    {
        result='You lose';
    }
    alert(`your move is paper, computer move is ${computer} the result is ${result}`);

}
function scissor()
{
    const rand=Math.random();
    let computer='';
    if(rand>=0 && rand<1/3)
    {
        computer='rock';
    }
    else if(rand>=1/3 && rand<2/3)
    {
        computer='paper';
    }
    else if(rand>=2/3 && rand<1)
    {
        computer='scissor';
    }
    let result='';
    if(computer==='rock')
    {
        result='You lose';
    }
    else if(computer==='paper')
    {
        result='You Win';
    }
    else if(computer==='scissor')
    {
        result='Tie';
    }
    alert(`your move is scissor, computer move is ${computer} the result is ${result}`);

}