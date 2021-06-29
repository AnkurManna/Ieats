                                                    
#pragma GCC optimize("O3")
#pragma GCC target ("sse4")
#include<bits/stdc++.h>
#define f 		first
#define s 		second
#define int     long long
#define ll      int
#define ld 		long double
#define pb 		push_back
#define eb 		emplace_back
#define mk 		make_pair
#define vi 		vector<int>
#define pii 		pair<int,int>
#define pip             pair<int,pii>
#define vpi 		vector<pii>
#define sbcount(x) __builtin_popcountll(x)
#define REP(i,n) for (int i = 1; i <= n; i++)

#define all(x)          x.begin(), x.end()
#define fill(a,val)	memset(a,val,sizeof(a))
#define 	PI acos(-1)
#define coud(a,b) cout<<fixed << setprecision((b)) << (a)
#define M1 	998244353
#define M2 	1000000007
const ll LL_INF = 0x3f3f3f3f3f3f3f3f;

template<typename T> T gcd(T a,T b) { if(a==0) return b; return gcd(b%a,a); } 
#define test4(x,y,z,a) 		    cerr<<#x<<":" <<x<<" | "<<#y<<": "<<y<<" | "<<#z<<": "<<z<<"  |  "<<#a<<": "<<a<<endl;
#define test1(x)                cerr<<#x<<": "<<x<<endl
#define test2(x, y)             cerr<<#x<<": "<<x<<" | "<<#y<<": "<<y<<endl
#define test3(x, y, z)          cerr<<#x<<":" <<x<<" | "<<#y<<": "<<y<<" | "<<#z<<": "<<z<<endl
ll power(ll a,ll b,ll m=M2){ll answer=1;while(b){if(b&1)answer=(answer*a)%m;b/=2;a=(a*a)%m;}return answer;}
using namespace std;
void ctrl(){cout<<"Control"<<endl;}
int make_num(string p){stringstream geek(p); int x = 0; geek >> x;return x;}
string make_str(int x){ostringstream str1; str1 << x; string geek = str1.str(); return geek;}
int A[1000][1000],B[1000][1000];
vector<pii>moves;
int n,m,k;
void construct(int step)
{
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<m;j++)
		{
			A[i][j] = 0;
			B[i][j] = 0;
		}
	}
	
	for(int i=0;i<step;i++)
	{
		if(i%2==0)
		A[moves[i].f-1][moves[i].s-1]++;
		else
		B[moves[i].f-1][moves[i].s-1]++;
	}
	
	for(int i=0;i<n;i++)
	{
		for(int j=1;j<m;j++)
		{
			A[i][j] += A[i][j-1];
			B[i][j] += B[i][j-1];
		}
	}
	
	for(int i=1;i<n;i++)
	{
		for(int j=0;j<m;j++)
		{
			A[i][j] += A[i-1][j];
			B[i][j] += B[i-1][j];
		}
	}
}
bool trav(int k,int step)
{
	if(step>(n*m))
	return true;
	if(step<0)
	return false;

    construct(step);
	
	for(int i=0;i+k-1<n;i++)
	{
		for(int j=0;j+k-1<m;j++)
		{
			
			{
				int tot = A[i+k-1][j+k-1];
				if(i)
				tot -= A[i-1][j+k-1];
				if(j)
				tot -= A[i+k-1][j-1];
				if(i&&j)
				tot += A[i-1][j-1];
				
                //test4(tot,i,j,step);

				if(tot==(k*k))
				return true;
				
			}
			
			{
				int tot = B[i+k-1][j+k-1];
				if(i)
				tot -= B[i-1][j+k-1];
				if(j)
				tot -= B[i+k-1][j-1];
				if(i&&j)
				tot += B[i-1][j-1];

               // test4(tot,i,j,step);
				
				if(tot==(k*k))
				return true;
			}
			
		}
	}
	
	return false;
}

signed main()
{	ios::sync_with_stdio(0);
	cin.tie(0); 
	cin.exceptions(cin.failbit);
	int tc;
	cin>>tc;
	for(int t=1;t<=tc;t++)
	{
        moves.clear();
        cin>>n>>m>>k;
        for(int i=0;i<n*m;i++)
        {
        	pii x;
        	cin>>x.f>>x.s;
        	moves.pb(x);
		}
		
		int val = n*m;
		int h = 0;
		for(int z=val;z>0;z=z/2)
		{
			while(trav(k,val-h-z))
            {
                
                h+=z;
            }
			
		}
        int x = val-h;
        if(x==(n*m))
        {
            if(!trav(k,x))
            cout<<"Draw\n";
            else
            {
                if(x%2)
                cout<<"Alice\n";
                else
                cout<<"Bob\n";
            }

        }
        else
        {
            if(x%2)
            cout<<"Alice\n";
            else
            cout<<"Bob\n";
        }
        
		
        
	}

return 0;
}